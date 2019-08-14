# modern-react-bootcamp
<div class="section" id="lights-out">
  <h1>Lights Out</h1>
  <p>
    Work with React events where the
    state and events happen in different classes.
  </p>
  <div class="section" id="the-game">
    <h2>The Game</h2>
    <p>
      <em>Lights Out</em> is a logic/puzzle game, played on a gird of
      individual lights, which can either be lit or unlit. The puzzle is
      won when when all of the lights are turned off. I am personally
      TERRIBLE at this game. I hope you are better at playing it than I
      am!
    </p>
    <p>
      You can click on a cell to toggle that light — but it also toggles
      the light above it, to the left of it, to the right of it, and
      below it. (Cells on an edge or in the corner won’t flip as many
      lights, since they are missing some neighbors).
    </p>
  </div>
</div>
<div class="section" id="react-forms-exercises">
  <h1>Todo App</h1>
  <p>
    Practice working with React forms.
  </p>
  <div class="section" id="part-2-todo-app-list-add-remove-todos">
    <h2>Todo App - List, Add, Remove Todos</h2>
    <p>
      Todo App that allows users to see, add, edit, and remove
      todos.
    </p>
  </div>
</div>
<div class="section" id="yahtzee-game">
    <h1>Yahtzee Game</h1>
    <div class="section" id="the-game">
        <h2>The Game</h2>
        <p>
            Yahtzee is a chance-and-strategy dice rolling game. A game is played over 13 rounds.
        </p>
        <p>
            Each round, the player rolls five 6-sided dice. They may click on any number of dice to “freeze” or “unfreeze” them (frozen dice are displayed in a different color). They may re-roll the unfrozen dice up to 2 times.
        </p>
        <p>
            Each round, they must assign their dice to any unclaimed scoring category. Each category scores differently.
        </p>
        <p>
            After 13 rounds, the game is over, and the player’s score is the total of each scoring category.
        </p>
        <div class="section" id="scoring-categories">
            <h3>Scoring Categories</h3>
            <table border="1" class="docutils">
                <colgroup>
                    <col width="25%">
                        <col width="51%">
                            <col width="24%">
                </colgroup>
                <thead valign="bottom">
                    <tr class="row-odd">
                        <th class="head">Category</th>
                        <th class="head">Description</th>
                        <th class="head">Example Score</th>
                    </tr>
                </thead>
                <tbody valign="top">
                    <tr class="row-even">
                        <td><strong>Ones</strong></td>
                        <td>Score 1 for every 1</td>
                        <td><code class="docutils literal notranslate"><span class="pre">1</span> <span class="pre">1</span> <span class="pre">2</span> <span class="pre">3</span> <span class="pre">4</span></code> = 2</td>
                    </tr>
                    <tr class="row-odd">
                        <td><strong>Twos</strong></td>
                        <td>Score 2 for every 2</td>
                        <td><code class="docutils literal notranslate"><span class="pre">1</span> <span class="pre">2</span> <span class="pre">2</span> <span class="pre">3</span> <span class="pre">4</span></code> = 4</td>
                    </tr>
                    <tr class="row-even">
                        <td><strong>Threes</strong></td>
                        <td>Score 3 for every 3</td>
                        <td><code class="docutils literal notranslate"><span class="pre">1</span> <span class="pre">2</span> <span class="pre">3</span> <span class="pre">3</span> <span class="pre">3</span></code> = 9</td>
                    </tr>
                    <tr class="row-odd">
                        <td><strong>Fours</strong></td>
                        <td>Score 4 for every 4</td>
                        <td><code class="docutils literal notranslate"><span class="pre">1</span> <span class="pre">2</span> <span class="pre">4</span> <span class="pre">4</span> <span class="pre">5</span></code> = 8</td>
                    </tr>
                    <tr class="row-even">
                        <td><strong>Fives</strong></td>
                        <td>Score 5 for every 5</td>
                        <td><code class="docutils literal notranslate"><span class="pre">1</span> <span class="pre">2</span> <span class="pre">5</span> <span class="pre">5</span> <span class="pre">5</span></code> = 15</td>
                    </tr>
                    <tr class="row-odd">
                        <td><strong>Sixes</strong></td>
                        <td>Score 6 for every 6</td>
                        <td><code class="docutils literal notranslate"><span class="pre">1</span> <span class="pre">2</span> <span class="pre">3</span> <span class="pre">6</span> <span class="pre">6</span></code> = 12</td>
                    </tr>
                    <tr class="row-even">
                        <td><strong>3 of Kind</strong></td>
                        <td>If 3+ of one value, score sum of all dice (otherwise, score 0)</td>
                        <td><code class="docutils literal notranslate"><span class="pre">1</span> <span class="pre">2</span> <span class="pre">3</span> <span class="pre">3</span> <span class="pre">3</span></code> = 12</td>
                    </tr>
                    <tr class="row-odd">
                        <td><strong>4 of Kind</strong></td>
                        <td>If 4+ of one value, score sum of all dice (else 0)</td>
                        <td><code class="docutils literal notranslate"><span class="pre">1</span> <span class="pre">2</span> <span class="pre">2</span> <span class="pre">2</span> <span class="pre">2</span></code> = 8</td>
                    </tr>
                    <tr class="row-even">
                        <td><strong>Full House</strong></td>
                        <td>If 3 of one value and 2 of another, score 25 (else 0)</td>
                        <td><code class="docutils literal notranslate"><span class="pre">2</span> <span class="pre">2</span> <span class="pre">3</span> <span class="pre">3</span> <span class="pre">3</span></code> = 25</td>
                    </tr>
                    <tr class="row-odd">
                        <td><strong>Small Straight</strong></td>
                        <td>If 4+ values in a row, score 30 (else 0)</td>
                        <td><code class="docutils literal notranslate"><span class="pre">1</span> <span class="pre">2</span> <span class="pre">3</span> <span class="pre">4</span> <span class="pre">6</span></code> = 30</td>
                    </tr>
                    <tr class="row-even">
                        <td><strong>Large Straight</strong></td>
                        <td>If 5 values in a row, score 40 (else 0)</td>
                        <td><code class="docutils literal notranslate"><span class="pre">1</span> <span class="pre">2</span> <span class="pre">3</span> <span class="pre">4</span> <span class="pre">5</span></code> = 40</td>
                    </tr>
                    <tr class="row-odd">
                        <td><strong>Yahtzee</strong></td>
                        <td>If all values match, score 50 (else 0)</td>
                        <td><code class="docutils literal notranslate"><span class="pre">2</span> <span class="pre">2</span> <span class="pre">2</span> <span class="pre">2</span> <span class="pre">2</span></code> = 50</td>
                    </tr>
                    <tr class="row-even">
                        <td><strong>Chance</strong></td>
                        <td>Score sum of all dice</td>
                        <td><code class="docutils literal notranslate"><span class="pre">1</span> <span class="pre">2</span> <span class="pre">3</span> <span class="pre">4</span> <span class="pre">6</span></code> = 16</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="section" id="example-round">
            <h3>Example Round</h3>
            <p>The initial roll is: <code class="docutils literal notranslate"><span class="pre">2</span> <span class="pre">4</span> <span class="pre">3</span> <span class="pre">2</span> <span class="pre">5</span></code>.</p>
            <p>The player decides to try to get as many twos as possible, and clicks to freeze both twos, then re-rolls, getting a new <code class="docutils literal notranslate"><span class="pre">2</span> <span class="pre">3</span> <span class="pre">5</span></code>. They now have: <code class="docutils literal notranslate"><span class="pre">2</span> <span class="pre">2</span> <span class="pre">3</span> <span class="pre">2</span> <span class="pre">5</span></code>.</p>
            <p>The player decides to try for a full house, and freezes all of their twos and their three (hoping to roll another 3 to get a full house). They re-roll the die showing five, getting a <code class="docutils literal notranslate"><span class="pre">6</span></code> and now have <code class="docutils literal notranslate"><span class="pre">2</span> <span class="pre">2</span> <span class="pre">3</span> <span class="pre">2</span> <span class="pre">6</span></code>.</p>
            <p>Sadly, they didn’t get their full house. They could score this as:</p>
            <ul class="simple">
                <li><em>Twos</em>: for 6 points</li>
                <li><em>Threes</em> for 3 points</li>
                <li><em>Sixes</em>: for 6 points</li>
                <li><em>Three of Kind:</em> (twos) for 15 points</li>
                <li><em>Chance</em>: for 15 points</li>
            </ul>
            <p>Any other category they claimed on this round would score 0.</p>
        </div>
    </div>
</div>
<div class="section" id="react-lifecycle-exercise">
  <h1>React Lifecycle Exercise</h1>
  <div class="section" id="part-i-deck-of-cards">
    <h2>Part I - Deck of Cards</h2>
    <p>
      Build an app that displays a deck of cards, one card at a time.
      When the page loads, send a request to
      <a class="reference external" href="https://deckofcardsapi.com/api/deck/new/shuffle">https://deckofcardsapi.com/api/deck/new/shuffle</a>
      to create a new deck. Store the Deck ID it gives you, so you can
      make further requests to retreive each card image. Add a button to
      your app that allows a user to draw a new card.
    </p>
    <p>
      When a user clicks the button, send another request to the API,
      this time to
      <a class="reference external" href="https://deckofcardsapi.com/api/deck/${deck_id}/draw/">https://deckofcardsapi.com/api/deck/${deck_id}/draw/</a>. (make sure to use your actual deck ID). Use the data included
      in the response to display a new card image, and make sure to
      include an informative alt attribute.
    </p>
    <p>
      Every time the user clicks, the app should display a new card
      until the deck is empty. Make sure to tell the user there are no
      cards left!
    </p>
  </div>
  <div class="section" id="part-ii-cheezjokes-app">
    <h2>Part II - Dad Jokes App</h2>
    <p>
      Build an app that lets people view and vote on cheesy jokes. To
      generate jokes, you’ll use the
      <a class="reference external" href="https://icanhazdadjoke.com/api">ICanHazDadJoke API</a>.
    </p>
    <p>When the page loads, it should fetch 10 jokes.</p>
    <p>
      Your application should list the jokes, along with a “vote-up”
      button, a “vote-down” button, and the net score for each joke.
      Users can vote, and the net score should update.
    </p>
  </div>
</div>
<div class="section" id="react-router-vending-machine">
  <h1>React Router Vending Machine</h1>
  <p>Use the React Router to build a vending machine!</p>
</div>
<div class="section" id="part-1-react-router-dog-finder">
  <h2>React Router Dog Finder</h2>
  <p>Build an app that allows a user to browse dogs.</p>
  <p>
    At the top of the app, add a navbar that displays the current
    active route.
  </p>
</div>
