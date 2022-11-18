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
        
                cy.wait(5000);
    });
});


let skus = []
const pdpName = []

const url = '/collections/seamless-underwear/products.json?limit=200';

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
                if(pdp.tags.includes('#Sale')){
                    skus.push(pdp.id)
                    pdpName.push('/products/' + pdp.handle)
                }
            }
        });
    })    
});

describe('Data is in console log', () => {
    it('copy and past data if prefer', () => {

            console.log('-------------------------------------')
            console.log(JSON.stringify(skus))
            console.log(JSON.stringify(pdpName) )
            console.log('-------------------------------------')
    })
})

//#product-actions-5320343945260
//.swatch-element.lg.available 
//close = .colz_pop_qa.size_guid_qa
//.btn.btnAddToCart
const skus2 = [5304595480620,5327776809004,5304592629804,5297140596780,6793224224812,6793227960364,6591645024300,6773499789356,6773500084268,5304863096876,6785782743084,6673058398252,6793230614572,5307181826092,5304608555052,6793270558764,6673032937516,6673036607532,6673029169196,6793276096556,6793267413036,6773865119788,6773865742380,6773864955948,6758604996652,6758609748012,6673083629612,5320532590636,5304608817196,6916253319212,5304568414252,6543109226540,6673038835756,6673040998444,6773501886508,6773503164460,6673051189292,6598934724652,5307437383724,5437828169772,6598933282860,5304606720044,6543108898860,6598929580076,6598936985644,5320343945260,5327905685548,5307109408812,5308108374060,5437827940396,6591644729388,6598918438956,5306945962028,5304863359020,5307166359596,5307239333932,5307230650412,5437827776556,6552036835372,6552037261356,5304598691884,5327841558572,5327529902124]
const pdpName2 = ["nude-bralette","nude-bikini-panties","black-bralette","black-brief-panties","spotted-panther-bralette","spotted-panther-brief","blue-opal-bralette","blue-iris-bralette","blue-iris-brief","sunkissed-brief","lime-punch-high-cut-high-waisted","lime-punch-highwaisted","spotted-panther-highwaisted","fjord-blue-thong","fjord-blue-highwaisted","laurel-green-cotton-bralette","keepsake-lilac-bralette","keepsake-lilac-high-waisted-panties","keepsake-lilac-bikini-panties","laurel-green-cotton-brief","laurel-green-cotton-bikini","blue-opal-cotton-bralette","blue-opal-cotton-brief","blue-opal-cotton-bikini","black-cotton-bralette-1","black-cotton-brief-panties","black-cotton-bikini-panties","nude-brief-panties","nude-high-waisted-panties","lime-punch-eco-silk-scarf","black-thong","opal-blue-thong-panties","laurel-green-bralette","provincial-blue-bralette","blue-iris-cheeky","blue-iris-highwaisted","lime-punch-bikini","fallen-rock-cotton-brief-panties","black-cheeky-panties","laurel-green-high-waisted-panties","fallen-rock-cotton-bralette","black-high-waisted-panties","high-waisted-opal-blue-panties","fallen-rock-cotton-bikini-panties","fallen-rock-cotton-thong-panties","black-bikini-panties","grey-bikini-panties","sleek-tiger-bikini","black-high-waisted-thong","cheeky-laurel-green-underwear","blue-opal-bikini-panties","blue-opal-high-waisted-thong","dark-palm-brief","sleek-tiger-brief","sleek-tiger-highwaisted","sleek-tiger-thong","sunkissed-thong","laurel-green-brief-panties","brief-provincial-blue-panties","provincial-blue-thong-panties","nude-thong","highwaisted-nude-thong","nude-cheeky"]
const selectorSize = '.swatch.clearfix .swatch-element.sm'

for(let i = 0; i < skus2.length; i++){
    describe(`${i}. ${pdpName2[i]} sku-${skus2[i]}`, () => {
        it(`Select Size + Add to Cart else Exit if disable`, () => {
        
            cy.get(`[data-prodsku='${skus2[i]}']`).then( el => {
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
                    cy.get(`#product-actions-${skus2[i]} .btn.btnAddToCart`).click({ force: true })
                } else {
                    throw new Error('did not see available or solout ')
                }
            });
        });
    });
}