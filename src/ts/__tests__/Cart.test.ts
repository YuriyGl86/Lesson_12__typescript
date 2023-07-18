import Cart from '../service/Cart';
import Book from '../domain/Book'
import MusicAlbum from '../domain/MusicAlbum'
import Movie from '../domain/Movie'
import Notebook from '../domain/Notebook'

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});


test('add 3 items', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(11111, 'Мстители', 'США', 2012,'avengers assemble', ['fantastic'], 127, 1500))
  expect(cart.items.length).toBe(3);
});

test('should return sum', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(11111, 'Мстители', 'США', 2012,'avengers assemble', ['fantastic'], 127, 1500))
  expect(cart.totalSum).toBe(4400);
});

test('should return sum with discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(11111, 'Мстители', 'США', 2012,'avengers assemble', ['fantastic'], 127, 1500))
  expect(cart.gettotalSumDiscount(10)).toBe(3960);
});

test('should delete items', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(11111, 'Мстители', 'США', 2012,'avengers assemble', ['fantastic'], 127, 1500))
  cart.deleteItem(1001)
  expect(cart.items.length).toBe(2);
});

test('should return sum several items', () => {
  const cart = new Cart();
  cart.add(new Notebook(10078, 'Asus', 5000));
  cart.add(new Notebook(10078, 'Asus', 5000));
  cart.add(new Movie(11111, 'Мстители', 'США', 2012,'avengers assemble', ['fantastic'], 127, 1500))
  expect(cart.totalSum).toBe(11500);
});

test('should delete several items', () => {
  const cart = new Cart();
  cart.add(new Notebook(10078, 'Asus', 5000));
  cart.add(new Notebook(10078, 'Asus', 5000));
  cart.add(new Notebook(10078, 'Asus', 5000));
  cart.add(new Notebook(10078, 'Asus', 5000));
  cart.deleteItem(10078)
  cart.deleteItem(10078)
  expect(cart.items.filter(e =>e.id ==10078)[0].amount).toBe(2);
});