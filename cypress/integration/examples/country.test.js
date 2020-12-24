describe('Country App', function(){
  beforeEach(function () {
    cy.visit('http://localhost:3000')
  })

  it('front page can be displayed', () => {
    cy.contains('Name')
  })

  it('checking the data displayed in ux', () => {
    cy.get('#root').click()
    cy.contains('Arabic')
  })

  it('Can also add to the cart', () => {
    cy.get('#root').click()
    cy.contains('Add').click()
  })

  it('Can also remove from the cart', () => {
    cy.get('#root').click()
    cy.contains('Add').click()
    cy.contains(1).click()
  })

  it('Name are clickalbe', () => {
    cy.get('#root')
    cy.contains('Afghanistan').click()
    cy.contains('Home')
  })
})