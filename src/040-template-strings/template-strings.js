const printGreeting = (name, language = 'english') => {
  let greeting;
  switch (language) {
    case 'french':
      greeting = 'Bonjour';
      break;
    case 'spanish':
      greeting = 'Hola';
      break;
    default:
      greeting = 'Hello';
  }

  return `${greeting.toUpperCase()}! ${name}.`;
};

const createAngularTemplate = (msg) => `<article class="content">
  <section class="section">
    <div class="col-md-12">
      <div class="card">
        <div class="card-block">
          <div class="card-title-block">
            <h3 class="title">
               ${msg}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</article>`;

export {
  printGreeting,
  createAngularTemplate,
};
