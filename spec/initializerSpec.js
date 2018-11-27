describe('Initializer', () => {
  it('should have an init function', () => {
    expect(initializer.init).toBeDefined();
  });
  it('should have a functionCall function', () => {
    expect(initializer.call).toBeDefined();
  });
  it('should have a blank function', () => {
    expect(initializer.blank).toBeDefined();
  });
  it('should have called the printer function with init', () => {
    spyOn(printer, 'print')
    initializer.init(40,40)
    expect(printer.print).toHaveBeenCalledWith(jasmine.any(Array))
  })
  it('should have called the printer function with move', () => {
    spyOn(printer, 'print')
    initializer.call()
    expect(printer.print).toHaveBeenCalledWith(jasmine.any(Array))
  })
});
describe('Initializer Make facility', () => {
  it('should have called the printer function with blank', () => {
    spyOn(printer, 'print')
    initializer.blank(40,40)
    expect(printer.print).toHaveBeenCalledWith(jasmine.any(Array))
  })
});
