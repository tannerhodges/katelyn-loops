$.each(jsonData, function (i, v) {
  if (i == "userPortfolios") {
    $.each(v, function (i1, v1) {
      $.each(v1, function (i2, v2) {
        if(i2=="portfolioAssets"){
          $.each(v2, function (i3, v3) {
            $.each(v3, function (i4, v4) {
              if(i4=="asset" && v4 != null){
                $.each(v4, function (i5, v5) {
                  $.each(v5, function (i6, v6) {
                    if(i6=="assetClass"){
                      console.log(i6 + "=" + v6);
                      //if an accordion for the asset class exists, do this:
                      if ( $.inArray( v6, classList ) > -1 ){
                        //addToExisting(v6);
                      }
                      //if an accordion for the asset class does not exist, do this:
                      else{
                        //createNew(v6);
                        classList.push(v6);
                      }
                    }
                  });
                });
              }
            });
          });
        }
      });
    });
  }
});
