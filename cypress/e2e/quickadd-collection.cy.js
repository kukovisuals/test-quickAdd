const getIframeDocument = () => {
  return cy
  .get('iframe#attentive_creative')
  .its('0.contentDocument').should('exist');
}

const getIframeBody = () => {
  // get the document
  return getIframeDocument()
  .its('body').should('not.be.undefined')
  .then(cy.wrap);
}
const URL = '/collections/seamless-underwear'
describe('Exit iframe', () => {
    it('exit from iframe if any',() => {
        cy.visit(URL);
        // getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
    });
});


const url = '/collections/seamless-underwear/products.json?limit=200';

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

let skus = []
const pdpName = []

let pdps = [6975557566508,6975567495212,5304592629804,5297140596780,6773504376876,5308088614956,5304595480620,5327776809004,6664648458284,6591621234732,6944000180268,6793219244076,6793220358188,6793262530604,6773511553068,6773513846828,6935334748204,5408793952300,5408808173612,5408810795052,6916255252524,6916254203948,6916252074028,6916254105644,6915712974892,6935428366380,6916254433324,6916252270636,6935429677100,6841303597100,6841295994924,6841305530412,6793224224812,6793227960364,6793230614572,6916251549740,6916255350828,6916252631084,6916251287596,6916255088684,6916251779116,6569006432300,6598944227372,6670188806188,6591645024300,6543109226540,6785782743084,6673054728236,6673058398252,6673051189292,5304595382316,5304605671468,6773499789356,6773500084268,6598933282860,6598934724652,6598929580076,6598936985644,5408808501292,5441467547692,5408803061804,5304863096876,6673032937516,6673036607532,6673029169196,5408840482860,6793270558764,6793276096556,6793267413036,6773510733868,5320532590636,5304608817196,5304598691884,5327841558572,5327529902124,6599108558892,6599105839148,6599107313708,6599097778220,6599095910444,6599094173740,6793199419436,6793212493868,6793215901740,6793216360492,6793217277996,6773865119788,6543108898860,6773865742380,6773864955948,5308118171692,6785213333548,6758604996652,6758609748012,6673083629612,5304606720044,5307437383724,5320343945260,5304568414252,6599017005100,6599021101100,6935320494124,5304608555052,5307181826092,6793221144620,6793218097196,6916253319212,6673038835756,6673040998444,6773501886508,6773503164460,5403032256556,5306929315884,5305242845228,6626878586924,5408806731820,5408843104300,5437828169772,6627392225324,5327905685548,5328034791468,5320544714796,5307109408812,5304600690732,5408843169836,5308108374060,5437827940396,6591644729388,6598918438956,5306945962028,5308101623852,5304863359020,5307166359596,5307239333932,5307230650412,5307244445740,5437827776556,6552036835372,6552037261356,5408810991660,5441467842604,5307242381356,6921319514156]

let pdpName2 = ["Reptile Stripe Mesh Bralette","Reptile Stripe Mesh Brief","Black Bralette","Black Brief","Exotic Botanical Bralette","Exotic Botanical Bikini","Nude Bralette","Nude Bikini","Black Mesh Bralette","Black Seamless Tank","Brick Dust Tank","Piki Bralette","Piki Brief","Piki High Cut","Picnic Rose Bralette","Picnic Rose Highwaisted","Castle Wall Bralette","Castle Wall Brief","Castle Wall Highwaisted","Castle Wall Thong","Castle Wall Eco Silk Tank Top","Castle Wall Eco Silk Blouse","Castle Wall Eco Silk Shorts","Brush Eco Silk Blouse","Brush Eco Silk Slip Dress","Brush Eco Silk Pants","Ocean Depths Eco Silk Blouse","Ocean Depths Eco Silk Shorts","Ocean Depths Eco Silk Pants","Ocean Depths Bra Bodysuit","Black Bra Bodysuit","Spotted Panther Bra Bodysuit","Spotted Panther Bralette","Spotted Panther Brief","Spotted Panther Highwaisted","Spotted Panther Eco Silk Long Slip Dress","Spotted Panther Eco Silk Tank Top","Spotted Panther Eco Silk Shorts","Cactus Eco Silk Slip Dress","Cactus Eco Silk Tank Top","Cactus Eco Silk Shorts","White Seamless Tank","Fallen Rock Seamless Tank","Blue Opal Seamless Tank","Blue Opal Bralette","Blue Opal Thong","Lime Punch High Cut Highwaisted","Lime Punch Brief","Lime Punch Highwaisted","Lime Punch Bikini","Grey Bralette","Grey Brief","Blue Iris Bralette","Blue Iris Brief","Fallen Rock Cotton Bralette","Fallen Rock Cotton Brief","Fallen Rock Cotton Bikini","Fallen Rock Cotton Thong","Fallen Rock Highwaisted","Fallen Rock Bikini","Fallen Rock Brief","Sunkissed Brief","Keepsake Lilac Bralette","Keepsake Lilac Highwaisted","Keepsake Lilac Bikini","Rose Dust Thong","Laurel Green Cotton Bralette","Laurel Green Cotton Brief","Laurel Green Cotton Bikini","Picnic Rose Bikini","Nude Brief","Nude Highwaisted","Nude Thong","Nude Highwaisted Thong","Nude Cheeky","Coral Pink Mesh Thong","Coral Pink Mesh Brief","Coral Pink Mesh Highwaisted","Caribbean Sea Mesh Thong","Caribbean Sea Mesh Highwaisted","Caribbean Sea Mesh Brief","Hyper Pink Mesh Brief","Hyper Pink Mesh Highwaisted","Lime Punch Mesh Bralette","Lime Punch Mesh Brief","Lime Punch Mesh Highwaisted","Blue Opal Cotton Bralette","Blue Opal Highwaisted","Blue Opal Cotton Brief","Blue Opal Cotton Bikini","Exotic Botanical Brief","Exotic Botanical High Cut Highwaisted","Black Cotton Bralette","Black Cotton Brief","Black Cotton Bikini","Black Highwaisted","Black Cheeky","Black Bikini","Black Thong","Black Mesh Brief","Black Mesh Thong","Reptile Stripe Mesh Thong","Fjord Blue Highwaisted","Fjord Blue Thong","Piki Highwaisted","Piki Bikini","Lime Punch Eco Silk Scarf","Laurel Green Bralette","Provincial Blue Bralette","Blue Iris Cheeky","Blue Iris Highwaisted","White Thong","Castor Grey Brief","Espresso Brief","El Sabor Thong","White Brief","White Cheeky","Laurel Green Highwaisted","Strawberry Ice Brief","Grey Bikini","Grey Cheeky","Grey Highwaisted","Sleek Tiger Bikini","Grey Thong","White Highwaisted Thong","Black Highwaisted Thong","Laurel Green Cheeky","Blue Opal Bikini","Blue Opal Highwaisted Thong","Dark Palm Brief","Raindrop Thong","Sleek Tiger Brief","Sleek Tiger Highwaisted","Sleek Tiger Thong","Sunkissed Thong","Espresso Thong","Laurel Green Brief","Provincial Blue Brief","Provincial Blue Thong","Fallen Rock Thong","Fallen Rock Cheeky","Castor Grey Thong","Peach Bloom Bralette"]

// ***********************************
// Loop from first half, or last half

const len = pdps.length;
const half = Math.ceil(len/2)

const paginationHeight = 667
const totalHeight = 41; //  *********** max 41

// choose a size from 0 - 7 
const iSize = 2;
// ***********************************
// end for changes

describe(`Grab all the pdp SKU and Array of pdps`, () => {
    it(`Grabs data from ${url}`, () =>{
        cy.request({
            method: 'GET',
            url: url,
            followRedirect: false,
            headers: {
                'accept': 'application/json'
            }
        })
        .then((response) => {
            // Parse JSON the body.
            let newData = response.body.products;
            // tags.includes('#Sale')
            // prodsku = 6975557566508 , id = 6975557566508
            // data-prodtitle = Reptile Stripe Mesh Bralette
            for(let pdp of newData){
                // if(pdp.tags.includes('#Sale')){
                    skus.push(pdp.id)
                    pdpName.push(pdp.title)
                // }
            }
        });
    })    
});



describe('Data is in console log', () => {
    it(`It loops 40 times`, () => {
        let h = 1;
        while( h < totalHeight){ 
            cy.wait(1000);
            cy.scrollTo(0, paginationHeight * h);
            expect(h, 'to be less than', totalHeight);
            h++;
        }
    })

    it('copy and past data if prefer', () => {

         console.clear()
        console.log('%c ---------Copy This Data---------', 'background: #023535; color: #fff')
        console.log('-------------------------------------')
        console.log('%c' + JSON.stringify(skus),'background: #023535; color: #fff')
        console.log('%c' + JSON.stringify(pdpName),'background: #023535; color: #fff')
        console.log('-------------------------------------')
        console.log(' /\_/\ ')
        console.log('( o.o ) ')
        console.log(' > ^ <')    
    })
})

//#product-actions-5320343945260
//.swatch-element.lg.available 
//close = .colz_pop_qa.size_guid_qa
//.btn.btnAddToCart

// #velaQuickAdd-6975557566508
const selectorSize = '.swatch.clearfix .swatch-element.sm'

// half
for(let i = 0; i < len ; i++){
    describe(`${i}. ${pdpName2[i]} sku-${pdps[i]}`, () => {
        it(`Select Size + Add to Cart else Exit if disable`, () => {
        
            cy.get(`[data-prodsku='${pdps[i]}']`).then( el => {
                // cy.scrollTo(0, 0);
                cy.wait(1000);
                // cy.scrollTo(0, 50);
                cy.wrap(el).find('.quickAddBtnInnerWrapper').eq(1).click({ force: true });
            });
            // grab the swatch lg or w.e
            cy.wait(3000);
            cy.get(selectorSize).then( $size => {
                
                if($size.hasClass('soldout')){
                    cy.get('.colz_pop_qa.size_guid_qa').click({ force: true })
                    expect('available').to.equal('soldout')
                } 
                else if($size.hasClass('available')) {
                    cy.wrap($size).click()
                    cy.get(`#product-actions-${pdps[i]} .btn.btnAddToCart`).click({ force: true })
                } else {
                    throw new Error('did not see available or solout ')
                }
            });
        });
    });
}