import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 2xm8m4_PhyAyxE25Knzu_I-aRXjMcs1QlODORySQmjGuIH-gnjYrYTkMaB0R_58m9HBxw8FlHHsbTfGvO7hQD5afK79BugLdMZ3ICqg9w3_oFwY3id8ylv86_g1BX3Yx',
  },
});
