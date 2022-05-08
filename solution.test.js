// @ts-check

import solution from 'solution.js';

describe('Request', () => {
  it('set 1', () => {
    const link = 'http://localhost:8080/';
    const title = 'Википедия';
    return new Promise((done) => {
      solution(title, link, (err, result) => {
        expect(result).toBe(link);
        done(err);
      });
    });
  });

  it('set 2', () => {
    const link = 'http://localhost:8080';
    const title = 'Инструкции';
    return new Promise((done) => {
      solution(title, link, (err, result) => {
        expect(result).toBe(`${link}/statements`);
        done(err);
      });
    });
  });

  it('set 3', () => {
    const link = 'http://localhost:8080';
    const title = 'Выражения';
    return new Promise((done) => {
      solution(title, link, (err, result) => {
        expect(result).toBe(`${link}/expressions`);
        done(err);
      });
    });
  });

  it('set 4', () => {
    const link = 'http://localhost:8080';
    const title = 'Операции';
    return new Promise((done) => {
      solution(title, link, (err, result) => {
        expect(result).toBe(`${link}/operators`);
        done(err);
      });
    });
  });

  it('set 5', () => {
    const link = 'http://localhost:8080';
    const title = 'Нафинг';
    return new Promise((done) => {
      solution(title, link, (err) => {
        expect(err).not.toBeNull();
        done();
      });
    });
  });
});
