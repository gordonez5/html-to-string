function Home() {
  return (
    <div className="content" data-page="home">
      <section>
        <h3>What is this?</h3>
        <p>This app takes simple HTML markup and outputs a string for use in APIs.</p>
      </section>

      <section>
        <h3>How do I use it?</h3>
        <p><code className="inline">src/data/countryMeta.json</code> contains a list of countries. This list corresponds to the html files inside the <code className="inline">src/content</code> directory.</p>
        <p>Adding more data to the JSON and creating a matching html file will create a new navigation item.</p>
        <p>Navigating to one of these pages will show the parsed output.</p>
      </section>

      <section>
        <h3>How does it work?</h3>
        <p>The contents of the html file is parsed with utility functions to create a one-line stringified output, suitable for adding to an API.</p>
        <p>There are also functions to split up the markup into two parts (show/hide). This is achieved with cascading logic.</p>
        <p>The html content will split:</p>
        <ul className="list--unordered">
          <li>where the marker <code className="inline">&lt;!-- __SPLIT__ --&gt;</code> is added,</li>
          <li>after the first closing paragraph tag (<code className="inline">&lt;/p&gt;</code>),</li>
          <li>at the closest sentence end after the 100-character threshold.</li>
        </ul>
      </section>

    </div>
  );
}

export default Home;
