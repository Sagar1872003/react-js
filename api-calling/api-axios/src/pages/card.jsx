import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedRecipes, setExpandedRecipes] = useState({});

  const fetchRecipes = async () => {
    try {
      let { data } = await axios.get('https://dummyjson.com/recipes');
      setRecipes(data.recipes);
    } catch (err) {
      console.log(err);
      setError('Failed to fetch recipes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (loading) {
    return (
      <div className="loading-spinner">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  const toggleRecipeDetails = (id) => {
    setExpandedRecipes((prevExpanded) => ({ ...prevExpanded, [id]: !prevExpanded[id] }));
  };

  return (
    <div className="container my-5">
      <h2 align="center" className="mb-4">Recipe List (Axios API Call)</h2>
      
      <div className="row justify-content-center">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col-lg-4 col-md-4 col-sm-6 mb-4">
            <div className="card recipe-card">
              <img
                src={recipe.image}
                className="card-img-top recipe-card-img"
                alt={recipe.name}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{recipe.name}</h5>
                <p className="card-text text-truncate">
                  {recipe.instructions.length > 100
                    ? `${recipe.instructions.substring(0, 100)}...`
                    : recipe.instructions}
                </p>
                 {expandedRecipes[recipe.id] && (
                  <div className="expanded-recipe-details">
                    <p>{recipe.instructions}</p>
                  </div>
                )}
                <button
                  className="btn btn-success btn-block mt-auto"
                  onClick={() => toggleRecipeDetails(recipe.id)}
                >
                  {expandedRecipes[recipe.id] ? 'View Less' : 'View More'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;