// TODO: This Program is to scrape data off websites!
  import puppeteer from 'puppeteer';
  import got from 'got';
  import cheerio from 'cheerio';
  import { html } from 'cheerio/lib/api/manipulation.js';

  
  
  const URL='https://www.geeksforgeeks.org/java/';

   async function scrapeHTML (URL){
  try{

     // Fetching HTML
    const response = await got(URL);
    const html = response.body;
    // console.log(html); 
      }
        
      catch (error){
        console.error(error)
      } 
      
      };
//calling the function
   scrapeHTML(URL)
  

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
      text: $(element).text(), // get the text
      href: $(element).attr('href'), // get the href attribute
    
  });
});
console.log(linksArray);
    }
    catch (error){
      console.error(error)
    } 
  };

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
     Image_href: $(element).attr('src'), // get the href attribute 
    <img src="link "
  });
});
console.log(imageArray);
    }
    catch (error){
      console.error(error)
    } 
  };

  scrapeIMAGES(URL);

  async function scrapeINPUT() {
try{
  const $= cheerio.load();

    const HTML = Request.URL;  //reques url from user if not provided

    console.log.info('Input Scraped',`URL: ${context.request.URL}`);

    console.log(HTML);
}
catch(error){
console.error();
}
    };

    scrapeINPUT();