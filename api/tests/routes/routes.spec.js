/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
	name: 'Milanea a la napolitana',
};

// describe('Recipe routes', () => {
// 	before(() =>
// 		conn.authenticate().catch(err => {
// 			console.error('Unable to connect to the database:', err);
// 		})
// 	);
// 	beforeEach(() =>
// 		Recipe.sync({ force: true }).then(() => Recipe.create(recipe))
// 	);
// 	describe('GET /recipes', () => {
// 		it('should get 200', () => agent.get('/recipes').expect(200));
// 	});
// });
/**Test Get routes**/
describe('Get routes testing', () => {
	describe('GET /types', () => {
		it('It should GET all diet types', done => {
			agent
				.get('/types')
				.then(response => {
					expect(response.status).to.equal(200);
					expect(response.body).to.be.a('array');
					expect(response.body).to.have.lengthOf(10);
				})
				.then(() => done(), done);
		});

		it('It should GET all diet types', done => {
			agent
				.get('/type')
				.then(response => {
					expect(response.status).to.equal(404);
				})
				.then(() => done(), done);
		});
	});
});
