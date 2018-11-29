describe('extractor', () => {
  beforeEach(function() {
    let grid = document.getElementById('grid');
    grid.innerHTML = '';
    grid.insertAdjacentHTML('afterbegin', '<svg width = "15" height = "15" ><rect class = "red" width = "15" height = "15"/></svg>');
    grid.insertAdjacentHTML('afterbegin', '<svg width = "15" height = "15" ><rect class = "red" width = "15" height = "15"/></svg>');
    grid.insertAdjacentHTML('afterbegin', '<svg width = "15" height = "15" ><rect class = "red" width = "15" height = "15"/></svg>');
    grid.insertAdjacentHTML('afterbegin', '<svg width = "15" height = "15" ><rect class = "red" width = "15" height = "15"/></svg>');
  });
  it('should have an extract method', () => {
    expect(extractor.extract).toBeDefined();
  });
  it('should return an array', () => {
    let list = extractor.extract()
    expect(list).toEqual(jasmine.any(Array));
  });
  it('array should have two arrays', () => {
    let list = extractor.extract();
    expect(list[0]).toEqual(jasmine.any(Array));
  });
  it('array should have a length of two', () => {
    let list = extractor.extract();
    expect(list[0].length).toBe(2);
  })
  it('array should have a length of two', () => {
    let list = extractor.extract();
    expect(list[0][0]).toBe('X');
  });
});
