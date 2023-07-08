import React from 'react'

function Test() {
    const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeWebsite(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Example scraping logic
    const title = $('title').text();
    const description = $('meta[name="description"]').attr('content');

    // Print the scraped data
    console.log('Title:', title);
    console.log('Description:', description);

    // Return the scraped data
    return {
      title,
      description
    };
  } catch (error) {
    console.error('Error:', error);
  }
}

// Usage example
const url = 'https://www.google.com/finance/'; // Replace with the URL of the website you want to scrape
scrapeWebsite(url);

  return (
    <div>
      
    </div>
  )
}

export default Test
