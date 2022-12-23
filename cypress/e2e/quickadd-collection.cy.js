const getIframeDocument = () => {
  return cy
    .get("iframe#attentive_creative")
    .its("0.contentDocument")
    .should("exist");
};

const getIframeBody = () => {
  // get the document
  return getIframeDocument()
    .its("body")
    .should("not.be.undefined")
    .then(cy.wrap);
};
const URL = "/collections/seamless-underwear";
describe("Exit iframe", () => {
  it("exit from iframe if any", () => {
    cy.visit(URL);
    // getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
  });
});

/*
    ***********************************
    *  :: Paste Array in pdps ::
    *  Change values here
     _._     _,-'""`-._
    (,-.`._,'(       |\`-/|
        `-.-' \ )-`( , o o)
              `-    \`_`"'-
    open cypress -> npx cypress open
    report ---> npx cypress run --reporter mochawesome
    ************************************
*/

let skus = [];
const pdpName = [];

let pdps = [
  6921319514156, 6935341957164, 6935339270188, 6935345070124, 6773508505644,
  6785221820460, 6773507620908, 6773509947436, 6841303597100, 6773509423148,
  5304595480620, 5320532590636, 6975557566508, 6975567495212, 6935320494124,
  6935297392684, 5304592629804, 6591621234732, 5297140596780, 5307437383724,
  6664648458284, 6599017005100, 6793219244076, 6793262530604, 6773499789356,
  6773500084268, 6773501886508, 6773503164460, 6793224224812, 6793227960364,
  6841305530412, 6793230614572, 6598933282860, 6598934724652, 6773504376876,
  6785213333548, 6599095910444, 6599094173740, 6599105839148, 6599108558892,
  6793217277996, 6793216360492, 5408808173612, 5408810795052, 5408793952300,
  5308118171692, 6773522202668, 5408803061804, 5441467842604, 5327776809004,
  5327529902124, 6793270558764, 6793267413036, 6944000180268, 6773511553068,
  6773513846828, 6569006432300, 5408806731820, 6591645024300, 6670188806188,
  6773865119788, 6543109226540, 6841295994924, 6758604996652, 6758609748012,
  5306945962028, 6598944227372, 6793276096556, 5304608817196, 5304598691884,
  5304595382316, 5304605671468, 6543108898860, 6773865742380, 6773864955948,
  6599107313708, 6793199419436, 6793212493868, 6599097778220, 6793215901740,
  6598929580076, 6598936985644, 5408808501292, 5441467547692, 6673036607532,
  6673029169196, 5408840482860, 5327841558572, 5308088614956, 6673083629612,
  5304606720044, 5320343945260, 5304568414252, 6599021101100, 5308108374060,
  6916254105644, 6915712974892, 6935428366380, 6916254433324, 6916252270636,
  6935429677100, 6916251549740, 6916255350828, 6916252631084, 6916251287596,
  6916255088684, 6916251779116, 6916255252524, 6916254203948, 6916252074028,
  6793221144620, 6793220358188, 6916253319212, 5304608555052, 5307181826092,
  6552036835372, 5403032256556, 5408843104300, 5327905685548, 5328034791468,
  5320544714796, 5304600690732, 6673038835756, 5437828169772, 5437827940396,
  5308101623852, 5304863359020, 5307109408812, 5307239333932, 5305242845228,
  5306929315884, 6626878586924, 6552037261356, 5408810991660, 6935307780140,
  5408810401836, 5308099756076,
];

let pdpName2 = [
  "Peach Bloom Bralette",
  "Peach Bloom Highwaisted",
  "Peach Bloom Brief",
  "Peach Bloom Thong",
  "Ocean Depths Bralette",
  "Ocean Depths High Cut Highwaisted",
  "Ocean Depths Bikini",
  "Ocean Depths Highwaisted",
  "Ocean Depths Bra Bodysuit",
  "Ocean Depths Brief",
  "Nude Bralette",
  "Nude Brief",
  "Reptile Stripe Mesh Bralette",
  "Reptile Stripe Mesh Brief",
  "Reptile Stripe Mesh Thong",
  "Green Millieu Thong",
  "Black Bralette",
  "Black Seamless Tank",
  "Black Brief",
  "Black Cheeky",
  "Black Mesh Bralette",
  "Black Mesh Brief",
  "Piki Bralette",
  "Piki High Cut Highwaisted",
  "Blue Iris Bralette",
  "Blue Iris Brief",
  "Blue Iris Cheeky",
  "Blue Iris Highwaisted",
  "Spotted Panther Bralette",
  "Spotted Panther Brief",
  "Spotted Panther Bra Bodysuit",
  "Spotted Panther Highwaisted",
  "Fallen Rock Cotton Bralette",
  "Fallen Rock Cotton Brief",
  "Exotic Botanical Bralette",
  "Exotic Botanical High Cut Highwaisted",
  "Caribbean Sea Mesh Highwaisted",
  "Caribbean Sea Mesh Brief",
  "Coral Pink Mesh Brief",
  "Coral Pink Mesh Thong",
  "Lime Punch Mesh Highwaisted",
  "Lime Punch Mesh Brief",
  "Castle Wall Highwaisted",
  "Castle Wall Thong",
  "Castle Wall Brief",
  "Exotic Botanical Brief",
  "Poppy Red Bralette",
  "Fallen Rock Brief",
  "Fallen Rock Cheeky",
  "Nude Bikini",
  "Nude Cheeky",
  "Laurel Green Cotton Bralette",
  "Laurel Green Cotton Bikini",
  "Brick Dust Tank",
  "Picnic Rose Bralette",
  "Picnic Rose Highwaisted",
  "White Seamless Tank",
  "White Brief",
  "Blue Opal Bralette",
  "Blue Opal Seamless Tank",
  "Blue Opal Cotton Bralette",
  "Blue Opal Thong",
  "Black Bra Bodysuit",
  "Black Cotton Bralette",
  "Black Cotton Brief",
  "Dark Palm Brief",
  "Fallen Rock Seamless Tank",
  "Laurel Green Cotton Brief",
  "Nude Highwaisted",
  "Nude Thong",
  "Grey Bralette",
  "Grey Brief",
  "Blue Opal Highwaisted",
  "Blue Opal Cotton Brief",
  "Blue Opal Cotton Bikini",
  "Coral Pink Mesh Highwaisted",
  "Hyper Pink Mesh Brief",
  "Hyper Pink Mesh Highwaisted",
  "Caribbean Sea Mesh Thong",
  "Lime Punch Mesh Bralette",
  "Fallen Rock Cotton Bikini",
  "Fallen Rock Cotton Thong",
  "Fallen Rock Highwaisted",
  "Fallen Rock Bikini",
  "Keepsake Lilac Highwaisted",
  "Keepsake Lilac Bikini",
  "Rose Dust Thong",
  "Nude Highwaisted Thong",
  "Exotic Botanical Bikini",
  "Black Cotton Bikini",
  "Black Highwaisted",
  "Black Bikini",
  "Black Thong",
  "Black Mesh Thong",
  "Black Highwaisted Thong",
  "Brush Eco Silk Blouse",
  "Brush Eco Silk Slip Dress",
  "Brush Eco Silk Pants",
  "Ocean Depths Eco Silk Blouse",
  "Ocean Depths Eco Silk Shorts",
  "Ocean Depths Eco Silk Pants",
  "Spotted Panther Eco Silk Long Slip Dress",
  "Spotted Panther Eco Silk Tank Top",
  "Spotted Panther Eco Silk Shorts",
  "Cactus Eco Silk Slip Dress",
  "Cactus Eco Silk Tank Top",
  "Cactus Eco Silk Shorts",
  "Castle Wall Eco Silk Tank Top",
  "Castle Wall Eco Silk Blouse",
  "Castle Wall Eco Silk Shorts",
  "Piki Highwaisted",
  "Piki Brief",
  "Lime Punch Eco Silk Scarf",
  "Fjord Blue Highwaisted",
  "Fjord Blue Thong",
  "Provincial Blue Brief",
  "White Thong",
  "White Cheeky",
  "Grey Bikini",
  "Grey Cheeky",
  "Grey Highwaisted",
  "Grey Thong",
  "Laurel Green Bralette",
  "Laurel Green Highwaisted",
  "Laurel Green Cheeky",
  "Raindrop Thong",
  "Sleek Tiger Brief",
  "Sleek Tiger Bikini",
  "Sleek Tiger Thong",
  "Espresso Brief",
  "Castor Grey Brief",
  "El Sabor Thong",
  "Provincial Blue Thong",
  "Fallen Rock Thong",
  "Fallen Rock Bralette",
  "White Highwaisted",
  "Exotic Botanical Thong",
];

// ***********************************
// Loop from first half, or last half

const len = pdps.length;
const half = Math.ceil(len / 2);

const paginationHeight = 667;
const totalHeight = 1; //  *********** max 41

// choose a size from 0 - 7
const iSize = 2;
// ***********************************
const url = "/collections/seamless-underwear/products.json?limit=200";
// end for changes

describe(`Grab all the pdp SKU and Array of pdps`, () => {
  it(`Grabs data from ${url}`, () => {
    cy.request({
      method: "GET",
      url: url,
      followRedirect: false,
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      // Parse JSON the body.
      let newData = response.body.products;
      // tags.includes('#Sale')
      // prodsku = 6975557566508 , id = 6975557566508
      // data-prodtitle = Reptile Stripe Mesh Bralette
      for (let pdp of newData) {
        // if(pdp.tags.includes('#Sale')){
        skus.push(pdp.id);
        pdpName.push(pdp.title);
        // }
      }
    });
  });
});

describe("Data is in console log", () => {
  it(`It loops 40 times`, () => {
    let h = 1;
    while (h < totalHeight) {
      cy.wait(200);
      cy.scrollTo(0, paginationHeight * h);
      expect(h, "to be less than", totalHeight);
      h++;
    }
  });

  it("copy and past data if prefer", () => {
    console.clear();
    console.log(
      "%c ---------Copy This Data---------",
      "background: #023535; color: #fff"
    );
    console.log("-------------------------------------");
    console.log(
      "%c" + JSON.stringify(skus),
      "background: #023535; color: #fff"
    );
    console.log(
      "%c" + JSON.stringify(pdpName),
      "background: #023535; color: #fff"
    );
    console.log("-------------------------------------");
    console.log(" /_/ ");
    console.log("( o.o ) ");
    console.log(" > ^ <");
  });
});

const quickAddSelectr =
  ".quick_btn .productQuickAdd button.btnProductQuickAdd span.text";
const selectorSize = ".swatch.clearfix .swatch-element";
const wrapper = ".ebyGuideChartWrapper.selection-wrapper";
const close = ".colz_pop_qa.size_guid_qa";

describe("QuickAdd homepage", () => {
  it(`Click on quick add`, () => {
    cy.wait(1000);
    cy.get(quickAddSelectr).each((el, i, list) => {
      // cy.scrollTo(0, 0);
      // cy.scrollTo(0, 50);
      // cy.wrap(el).click({ force: true });
      // cy.get(wrapper).find(selectorSize).then( ($size) => {

      // if($size.hasClass('soldout')){
      //     cy.get('.colz_pop_qa.size_guid_qa').click()
      //     expect('available').to.equal('soldout')
      // }
      // else if($size.hasClass('available')) {
      //     cy.wrap($size).click()
      //     cy.get(`.btn.btnAddToCart`).click({ force: true })
      // } else {
      //     throw new Error('did not see available or solout ')
      // }
      // });
      const textAddCart = Cypress.$(el).text();
      // expect(list).to.have.lengthOf(26);
      // expect(textAddCart).to.equal('Add To Cart')
      cy.wait(500);
      cy.wrap(el).click();
      cy.wait(2000);
      cy.get(selectorSize).each(($size, index) => {
        if (index > 3) {
          return;
        } else if ($size.hasClass("available") && index < 4) {
          cy.wrap($size).click();
					cy.get(
            `#product-actions-${pdps[i]} .proButton .btn.btnAddToCart`
          ).scrollIntoView()
          cy.get(
            `#product-actions-${pdps[i]} .proButton .btn.btnAddToCart`
          ).click();
					
					cy.wait(1000);
        }
      });
			cy.get(close).scrollIntoView()
      cy.get(close).click();
    });
    // grab the swatch lg or w.e
    // cy.wait(3000);
    // cy.get(selectorSize).each( ($size, j) => {
    //
    //     if($size.hasClass('soldout')){
    //         cy.get('.colz_pop_qa.size_guid_qa').click()
    //         expect('available').to.equal('soldout')
    //     }
    //     else if($size.hasClass('available')) {
    //         cy.wrap($size).click()
    //         cy.get(`.btn.btnAddToCart`).click({ force: true })
    //     } else {
    //         throw new Error('did not see available or solout ')
    //     }
    // });
  });
});

//#product-actions-5320343945260
//.swatch-element.lg.available
//close = .colz_pop_qa.size_guid_qa
//.btn.btnAddToCart

// #velaQuickAdd-6975557566508

// const selectorSize = '.swatch.clearfix .swatch-element.sm'
//
// // half
// for(let i = 0; i < len ; i++){
//     describe(`${i}. ${pdpName2[i]} sku-${pdps[i]}`, () => {
//         it(`Select Size + Add to Cart else Exit if disable`, () => {
//
//             cy.get(`[data-prodsku='${pdps[i]}']`).then( el => {
//                 // cy.scrollTo(0, 0);
//                 cy.wait(1000);
//                 // cy.scrollTo(0, 50);
//                 cy.wrap(el).find('.quickAddBtnInnerWrapper').eq(1).click({ force: true });
//             });
//             // grab the swatch lg or w.e
//             cy.wait(3000);
//             cy.get(selectorSize).then( $size => {
//
//                 if($size.hasClass('soldout')){
//                     cy.get('.colz_pop_qa.size_guid_qa').click({ force: true })
//                     expect('available').to.equal('soldout')
//                 }
//                 else if($size.hasClass('available')) {
//                     cy.wrap($size).click()
//                     cy.get(`#product-actions-${pdps[i]} .btn.btnAddToCart`).click({ force: true })
//                 } else {
//                     throw new Error('did not see available or solout ')
//                 }
//             });
//         });
//     });
// }
