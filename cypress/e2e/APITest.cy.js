describe('API automation - pokeapi', () => {
  const url = 'https://pokeapi.co/api/v2/'
  const pokemon = 'charizard'
  const ability = 'blaze'
  const pokemon2 = 'charmander'
  const pokemon3 = 'pikachu'

  it('verify that charizard has the blaze ability', () => {
    cy.request({method:"GET", url:url +"pokemon/"+pokemon, failOnStatusCode:false }).then(
      (response)=>{
        expect(response.body).to.have.property('name', pokemon),
        expect(response.body.abilities[0].ability).to.have.property('name',ability)
      })
  })

  it('verify that charizard have the same type of charmander', () => {

    cy.request({method:"GET", url:url +"pokemon/"+pokemon, failOnStatusCode:false }).then(
      (response)=>{
        const charizarType = response.body.types[0].type.name;

        expect(response.body).to.have.property('name', pokemon)

        cy.request({method:"GET", url:url +"pokemon/"+pokemon2, failOnStatusCode:false }).then(
          (response2)=>{
            const charmanderType = response2.body.types[0].type.name;
            expect(response2.body).to.have.property('name', pokemon2)

            expect(charizarType).to.equal(charmanderType)

          })
      })
    })

    it('verify that charizard have more hp, attack and defense than pikachu', () => {

      cy.request({method:"GET", url:url +"pokemon/"+pokemon, failOnStatusCode:false }).then(
        (response)=>{
          const charizardHp = response.body.stats[0].base_stat;
          const charizardAttack = response.body.stats[1].base_stat;
          const charizardDefense = response.body.stats[2].base_stat;          
  
          expect(response.body).to.have.property('name', pokemon)
          expect(response.body.stats[0].stat).to.have.property('name', 'hp')
          expect(response.body.stats[1].stat).to.have.property('name', 'attack')
          expect(response.body.stats[2].stat).to.have.property('name', 'defense')

          cy.request({method:"GET", url:url +"pokemon/"+pokemon3, failOnStatusCode:false }).then(
            (response2)=>{
              const pikachuHp = response2.body.stats[0].base_stat;
              const pikachuAttack = response2.body.stats[1].base_stat;
              const pikachuDefense = response2.body.stats[2].base_stat;          
      
              expect(response2.body).to.have.property('name', pokemon3)
              expect(response2.body.stats[0].stat).to.have.property('name', 'hp')
              expect(response2.body.stats[1].stat).to.have.property('name', 'attack')
              expect(response2.body.stats[2].stat).to.have.property('name', 'defense')
  
              expect(charizardHp).to.be.greaterThan(pikachuHp)
              expect(charizardAttack).to.be.greaterThan(pikachuAttack)
              expect(charizardDefense).to.be.greaterThan(pikachuDefense)
            })
        })
    })
})