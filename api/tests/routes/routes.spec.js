/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
	title: 'CHILAQUILES YUCATECOS',
	summary:
		'Disfruta de esta rica receta de chilaquiles yucatecos, pues aunque es una versión diferente, también están llenos de sabor. Se preparan con una rica salsa de habanero, cochinita pibil y cebollas encurtidas. ¡Tu familia te los pedirá cada fin de semana!',
	score: '95.5',
	healthscore: '55.5',
	dietTypes: ['Gluten Free', 'Paleo'],
};

describe('Recipe routes', () => {
	before(() =>
		conn.authenticate().catch(err => {
			console.error('Unable to connect to the database:', err);
		})
	);
	beforeEach(() =>
		Recipe.sync({ force: true }).then(() => Recipe.create(recipe))
	);
	describe('Post /recipe', () => {
		it('should get 200', () => agent.post('/recipe').expect(200));
	});
});
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
