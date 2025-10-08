const request = require('supertest');
const { expect } = require('chai')


describe('Users', () => {
    describe('POST/users/register', async () => {
        it('Deve retornar sucesso com 201 para registro de novo usuário', async () => {
            const resposta  = await request('http://localhost:3000')
            .post('/users/register')
            .set('Content-Type', 'application/json')
            .send({
                'username': '',
                'favorecidos': [''],
                'saldo': ''
            })
            expect(resposta.status).to.equal(201);
        })

       /* it('Retornar falha com 400 para erro de validação ou usuário existente', async () => {
            const resposta = await request('http://localhost:3000')
                .post('/users/register')
                .set('Content-Type', 'application/json')
                .send({
                    'username': '',
                    'favorecidos': [''],
                    'saldo': ''
                })

                expect(resposta.status).to.equal(400);
        })
      Teste incompleto*/

    })
    describe('GET/users', () => {
        it('Retornar com sucesso 200 para listagem de usuários', async () => {
            const resposta = await request('http://localhost:3000')
            .get('/users')
            .set('Content-Type', 'application/json')
            .send({
                'username': '',
                'password': '',
                'favorecidos': ['']
            })
            expect(resposta.status).to.equal(200);
            expect(resposta.body.users).to.have.lengthOf()
            //console.log(resposta.body)
        })
    })
    describe('POST/users/login', async () => {
        it('Deve retornar sucesso com 200 para login de usuário com token', async () => {
            const resposta = await request('http://localhost:3000')
                .post('/users/login')
                .set('Content-Type', 'application/json')//como seto o cabeçalho para essa requisição
                .send({
                    'username': 'sandra',
                    'password': '123456'
                })
            const token = resposta.body.token    

            expect(resposta.status).to.equal(200);
            //console.log(resposta.body) 

        })
    })

})