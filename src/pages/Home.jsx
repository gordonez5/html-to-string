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

      <section>
        <h3>Using class names for styling</h3>
        <p>A number of class names can be added to the HTML markup to aid with styling. These include:</p>
        <ul className="list--unordered">
          <li><code className="inline">.bulletList</code><br />Added to <code className="inline">&lt;ul&gt;</code> elements, this class name will style the list with bullets</li>
          <li><code className="inline">.bulletList.checkmark</code><br />Added to <code className="inline">&lt;ul&gt;</code> elements, this combination of class names will style the list with Unicode checkmarks ( <span className="checkmark"></span> )</li>
          <li><code className="inline">.bulletList.crossmark</code><br />Added to <code className="inline">&lt;ul&gt;</code> elements, this combination of class names will style the list with Unicode crosses ( <span className="crossmark"></span> )</li>
        </ul>
      </section>

    </div>
  );
}

export default Home;
