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
const URL = '/collections/bralettes-for-women'
describe('Exit iframe', () => {
    it('exit from iframe if any',() => {
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

let skus = []
const pdpName = []

const paginationHeight = 667
const totalHeight = 5; //  *********** max 41

describe('Data is in console log', () => {
    it(`It loops 40 times`, () => {
        let h = 1;
        while( h < totalHeight){ 
            cy.wait(500);
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


const quickAddSelectr = '.quick_btn .productQuickAdd button.btnProductQuickAdd';
const selectorSize = '.swatch.clearfix .swatch-element.sm'
const wrapper = '.ebyGuideChartWrapper.selection-wrapper'
const close = '.colz_pop_qa.size_guid_qa';

describe('QuickAdd homepage', () => {

  it(`Click on quick add` ,() => {
        
      cy.scrollTo(0, 2700);
      cy.wait(1000);
      cy.get(quickAddSelectr).each( (el,i,list) => {
  
        const textAddCart = Cypress.$(el).text()
        // expect(list).to.have.lengthOf(26);
        // expect(textAddCart).to.equal('Add To Cart')
        cy.wait(500)
        cy.wrap(el).click()
        cy.wait(2000)
        cy.get(close).click()
      });

  });
});












