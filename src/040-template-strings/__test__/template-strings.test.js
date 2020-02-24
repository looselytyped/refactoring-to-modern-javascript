import {
  printGreeting,
  createAngularTemplate,
} from '../template-strings';

describe('template-strings', () => {
  describe('printGreeting', () => {
    it('should print the default greeting in english', () => {
      expect.assertions(1);
      expect(printGreeting('raju')).toBe('HELLO! raju.');
    });

    it('should print the greeting in french', () => {
      expect.assertions(1);
      expect(printGreeting('raju', 'french')).toBe('BONJOUR! raju.');
    });

    it('should print the greeting in spanish', () => {
      expect.assertions(1);
      expect(printGreeting('raju', 'spanish')).toBe('HOLA! raju.');
    });
  });

  describe('createAngularTemplate', () => {
    it('should return a fully formatted template', () => {
      expect.assertions(1);

      const ret = `<article class="content">
  <section class="section">
    <div class="col-md-12">
      <div class="card">
        <div class="card-block">
          <div class="card-title-block">
            <h3 class="title">
               Hello
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</article>`;

      expect(createAngularTemplate('Hello')).toBe(ret);
    });
  });
});
