describe('Printer', () => {
  it('has a print function', () => {
    expect(printer.print).toBeDefined();
  });
  it('function to have been called', () => {
    spyOn(printer, 'print');
    let game = new Game(5, 5);
    game.seed(0);
    game.print();
    expect(printer.print).toHaveBeenCalled();
  });
});
