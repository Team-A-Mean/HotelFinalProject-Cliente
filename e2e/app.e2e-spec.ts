import { ProjectoFinalHotelPage } from './app.po';

describe('projecto-final-hotel App', function() {
  let page: ProjectoFinalHotelPage;

  beforeEach(() => {
    page = new ProjectoFinalHotelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
