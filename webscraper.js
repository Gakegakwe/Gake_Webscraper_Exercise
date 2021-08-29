// TODO: This code is expected to scrape data from a website!
import puppeteer from "puppeteer";
import got from "got";
import cheerio from "cheerio";
import PromptSync from "prompt-sync";

const prompt = PromptSync();
const URL = prompt("enter the website you want to scrape: ");
const results = await got(URL);
const HTML = results.body;

const $ = cheerio.load(HTML);

/**
 * Scrapes an HTML page
 * Importing the got module.
 * Defining a function that takes a URL as an argument.
 * Using the got module to fetch the HTML page code.
 * Returning the HTML page code.
 */

async function scrapeHTML(URL) {
  try {
    // Fetching HTML page code
    const response = await got(URL);
    const html = response.body;
    console.log(html);
  } catch (error) {
    console.error(error);
  }
}
scrapeHTML(URL);

/**
 * Scrapes LINKS from a page
 * First, we’re using the $() function to select all the anchor tags on the page.
 * Next, we’re using the each() function to loop through each of the anchor tags.
 * We’re using the push() function to push each of the anchor tags into an array.
 * Finally, we’re logging the array to the console.
 */

async function scrapeLINKS() {
  try {
    const links = $("a");
    const linksArray = [];

    links.each((index, element) => {
      linksArray.push({
        text: $(element).text(),
        href: $(element).attr("href"),
      });
    });
    console.log(linksArray);
  } catch (error) {
    console.error(error);
  }
}

scrapeLINKS();

/**
 * Scrapes an images links from HTML page
 * get the href and text attribute of image links
 * await keyword to wait for the promise to resolve.
 * try/catch block to catch any errors that might occur.
 * $() function to select all the images on the page.
 * using the each() function to loop through each image and extract the alt and src attributes.
 * We’re pushing each object to an array.
 * Finally, we’re logging the array to the console.
 */

async function scrapeIMAGES() {
  try {
    const image = $("img");
    const imageArray = [];

    image.each((index, element) => {
      imageArray.push({
        alt: $(element).alt(),
        href: $(element).attr("src"),
      });
    });
    console.log(imageArray);
  } catch (error) {
    console.error(error);
  }
}

scrapeIMAGES();

/**
 * Scrapes an input in the address bar
 * Creating a try and catch block to catch any errors.
 * Creating a const called HTML and assigning it the URL from the user.
 * Logging the URL to the console.
 */

async function scrapeINPUT() {
  try {
    const HTML = Request.URL;

    console.log.info("Input Scraped", `URL: ${context.request.URL}`);
    console.log(HTML);
  } catch (error) {
    console.error(error);
  }
}

scrapeINPUT();
