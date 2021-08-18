const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
	before(() =>
		conn.authenticate().catch(err => {
			console.error('Unable to connect to the database:', err);
		})
	);
	describe('Validators', () => {
		beforeEach(() => Recipe.sync({ force: true }));
		describe('Validate mandatory fileds title and summay', () => {
			it('It should throw an error when title and summary are empty', done => {
				Recipe.create({})
					.then(result =>
						done(new Error('Title and Summary must not be empty'))
					)
					.catch(() => done());
			});

			it('It should throw an error when title is empty', done => {
				Recipe.create({ summary: 'something here!!' })
					.then(result => done(new Error('Title must not  be empty')))
					.catch(() => done());
			});

			it('It should throw an error when summary is empty', done => {
				Recipe.create({
					title: 'guacamole',
				})
					.then(result =>
						done(new Error('Summary must not be empty'))
					)
					.catch(() => done());
			});

			it('It should create a recipe  when title and summary are not empty', done => {
				Recipe.create({
					title: 'guacamole',
					summary: 'something here!!',
				})
					.then(result => done())
					.catch(() =>
						done(new Error('Title and Summary must not be empty'))
					);
			});
		});
	});
});
