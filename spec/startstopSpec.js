describe('setInterval startstop function', () => {
  beforeEach( () => {
    jasmine.clock().install();
  });
  afterEach( () => {
    jasmine.clock().uninstall();
  });
  it('calls setInterval with startStop.run after 500ms', () => {
    spyOn(printer, 'print');
    initializer.init(40, 40)
    startStop.run();
    jasmine.clock().tick(600);
    expect((printer.print).calls.count()).toEqual(2);
  });
  it('printer gets called every 500 ms', () => {
    spyOn(printer, 'print');
    initializer.init(40, 40);
    startStop.run();
    jasmine.clock().tick(1000);
    expect((printer.print).calls.count()).toEqual(3);
  });
  it('startstop function stops setInterval', () => {
    spyOn(printer, 'print');
    initializer.init(40, 40);
    startStop.run();
    jasmine.clock().tick(1000);
    startStop.stop();
    jasmine.clock().tick(1000);
    expect((printer.print).calls.count()).toEqual(3);
  });
});
