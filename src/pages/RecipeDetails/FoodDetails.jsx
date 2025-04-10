import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IngredientsCard from '../../components/IngredientsCard/IngredientsCard';
import Card from '../../components/RecomendationCard/RecomendationCard';
import Button from '../../components/ButtonStartRecipe/ButtonStartRecipe';
import ShareAndFav from '../../components/ButtonsShareAndFav';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
  RecomendationConteiner,
  MainConteiner,
  FoodImg,
  FoodTitle,
  Title,
  ShareAndFavContainer,
  FoodInstructions,
  InstructionsContainer,
  ConteinerVideoRecipe,
  Video,
} from './styles';

export default function FoodDetails() {
  const { id } = useParams();

  const [foodDetails, setFoodDetails] = useState({});
  const [YTCode, setYTCode] = useState('/');
  const youtubeCode = (data) => setYTCode(data.split('=')[1]);

  useEffect(() => {
    const fetchFoodDetails = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      const foodDetailsData = data.meals[0];
      setFoodDetails(foodDetailsData);
      youtubeCode(foodDetailsData.strYoutube);
      console.log(foodDetailsData);
    };
    fetchFoodDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [recommended, setRecommended] = useState([]);
  console.log(recommended);
  const MAX_RECOMMENDATION = 6;

  useEffect(() => {
    const fetchApi = async () => {
      // eslint-disable-next-line
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
      const resolve = await response.json();
      setRecommended(resolve.drinks);
    };
    fetchApi();
  }, []);

  return (
    <div>
      <Header title="Food" />
      <MainConteiner>
        <FoodTitle data-testid="recipe-title">
          { foodDetails.strMeal }
        </FoodTitle>
        <FoodImg
          data-testid="recipe-photo"
          width="360"
          height="200"
          src={ foodDetails.strMealThumb }
          alt={ `${foodDetails.strMeal}` }
        />
        <ShareAndFavContainer>
          <ShareAndFav
            id={ id }
            idType={ foodDetails.idMeal }
            image={ foodDetails.strMealThumb }
            category={ foodDetails.strCategory }
            area={ foodDetails.strArea }
            name={ foodDetails.strMeal }
            type="food"
            page="foods"
          />
        </ShareAndFavContainer>
        <Title>Ingredients</Title>
        <IngredientsCard data={ foodDetails } />
        <Title>Instructions</Title>
        <InstructionsContainer data-testid="instructions">
          <FoodInstructions>
            { foodDetails.strInstructions }
          </FoodInstructions>
        </InstructionsContainer>
        <Title>Video</Title>
        <ConteinerVideoRecipe>
          <Video
            data-testid="video"
            width="230"
            height="155"
            src={ `https://www.youtube.com/embed/${YTCode}` }
            title={ foodDetails.strMeal }
            frameBorder="0"
            allowFullScreen
          />
        </ConteinerVideoRecipe>
        <Title>Recommended</Title>
        <RecomendationConteiner>
          {recommended.slice(0, MAX_RECOMMENDATION)
            .map(({ idDrink, strDrink, strDrinkThumb, strAlcoholic }, index) => (
              <Card
                key={ index }
                src={ strDrinkThumb }
                name={ strDrink }
                testDiv={ `${index}-recomendation-card` }
                testTitle={ `${index}-recomendation-title` }
                testImg={ `${index}-card-img` }
                id={ idDrink }
                path="drinks"
                category={ strAlcoholic }
              />
            ))}
        </RecomendationConteiner>

        <Button
          id={ id }
          type="meals"
          page="foods"
        />

      </MainConteiner>
      <Footer />
    </div>
  );
}
