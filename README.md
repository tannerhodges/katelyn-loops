# Katelyn's Loops

Refactoring that which is JSON.

## Refactored JS (Sample)

```javascript
$.getJSON('data.json', function(data) { parseMyData(data) });

var parseMyData = function(data) {
  $.each(data.userPortfolios, function(index, portfolio) {
    $.each(portfolio.portfolioAssets, function(index, assetMeta) {
      if ( ! assetMeta.asset) { return true }
      $.each(assetMeta.asset, function(index, asset) {
        doSomethingWithYourClass(asset.assetClass);
      });
    });
  });
}

var doSomethingWithYourClass = function(assetClass) { console.log(assetClass); }
```