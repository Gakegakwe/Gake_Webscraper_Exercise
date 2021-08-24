// TODO: This code is expected to scrape data from a website!
import puppeteer from 'puppeteer';
import got from 'got';
import cheerio from 'cheerio';
import { html } from 'cheerio/lib/api/manipulation';

const URL='https://openlibrary.org/';

//Function for scraping an HTML page
 async function scrapeHTML (URL){
try{
      
   // Fetching HTML page code
  const response = await got(URL);
  const html = response.body;
   console.log(html); 
    }
      
    catch (error){
      console.error(error)
    } 
    
    };
//calling the function
 scrapeHTML(URL)

//Function for scraping an LINKS from a page
 async function scrapeLINKS (URL){
  try{

const results= await got(URL);
const HTML=results.body;

//load HTML page saved
const $= cheerio.load(HTML);

const links=$('a');
const linksArray=[];

links.each((index, element) => {
linksArray.push({
   // get the text
    text: $(element).text(),
   // get the href attribute
    href: $(element).attr('href'),
  
});
});
console.log(linksArray);
  }
  catch (error){
    console.error(error)
  } 
};

//calling the function
scrapeLINKS (URL);

async function scrapeIMAGES (URL){
  try{

const results= await got(URL);
const HTML=results.body;

//load HTML page saved
const $= cheerio.load(HTML);

const image=$('img');
const imageArray=[];

image.each((index, element) => {
imageArray.push({
  
   // get the text
    alt: $(element).alt(),
   // get the href attribute
    href: $(element).attr('src'),
  
});
});
console.log(imageArray);
  }
  catch (error){
    console.error(error)
  } 
};
//calling the function
scrapeIMAGES(URL);

//function for scraping the input in the address bar
async function scrapeINPUT(URL){
  try{

const results= await got(URL);
const HTML=results.body;

//load HTML page saved
const $= cheerio.load(HTML);

const links=$('a');
const linksArray=[];

links.each((index, element) => {
linksArray.push({
  // get the text
    text: $(element).text(), 
  // get the href attribute
    href: $(element).attr('href'), 
  
});
});
console.log(linksArray);
  }
  catch (error){
    console.error(error)
  } 
};

scrapeLINKS (URL);