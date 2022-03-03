import React from 'react';
import { Container } from 'semantic-ui-react';
import { Page, DocList, Header } from './components';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
    return (
        <div className="app">
            <Container >
                <Router>
                    <Header />
                    <Page>
                        <DocList />
                    </Page>
                </Router>
            </Container>
        </div>
    );
}

export default App;
