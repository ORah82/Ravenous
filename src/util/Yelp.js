const apiKey = 'GrVtweAP16K5CMVg6jnDkKyKMye8HrLKu7Oc1_YjjC196l5X1Z7mrL89Jhu7m1Tms_3gDMn2m39k3W6g2u-Te2hVB7xB6L4lWUGnQQ_9av4N-hkAYXjfRUaEsLCdWnYx'

const Yelp = {

  const Yelp = {
    search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json()
        }).then(jsonResponse => {
          if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => ({
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_Code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count
            }));
          }
        });
      }
    };

  export default Yelp;
