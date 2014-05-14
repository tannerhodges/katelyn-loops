// Get your JSON data to get the party started
// http://api.jquery.com/jQuery.getJSON/
$.getJSON('data.json', function(data) { parseMyData(data) });

/**
 * Fancy function to parse through your JSON data
 * @param  json data Contents of your JSON file
 * @return void
 */
var parseMyData = function(data) {

  // Loop through the user's portfolios
  $.each(data.userPortfolios, function(index, portfolio) {

    // Loop through each portfolio's assets
    $.each(portfolio.portfolioAssets, function(index, assetMeta) {

      // Make sure the asset data exists, otherwise continue
      if ( ! assetMeta.asset) { return true }

      // Loop through asset data <-- Not sure why this is in an array?
      $.each(assetMeta.asset, function(index, asset) {

        // Store your class-handling logic in a separate function
        // - just to keep things neat
        doSomethingWithYourClass(asset.assetClass);
      });
    });
  });
}

/**
 * Do whatever it is you do
 * @param  string class Name of a portfolio's asset class
 * @return void
 */
var doSomethingWithYourClass = function(assetClass) {

  $('#output').append('<li>' + assetClass + '</li>');

  // Original code below:

  // if ( $.inArray( assetClass, classList ) !== -1 ) {
  //   // addToExisting(assetClass);
  // }
  // else {
  //   // createNew(assetClass);
  //   classList.push(assetClass);
  // }
}