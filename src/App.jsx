import Button from './components/Button';
import Card from './components/Card';

function App() {
    return (
        <div
            className={
                'bg-slate-100 text-slate-800 tracking-tight antialiased flex items-center justify-center min-h-screen'
            }
        >
            <div className={'max-w-xl w-full'}>
                <Card>
                    <Card.Title>Hello Taufik</Card.Title>
                    <Card.Body>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quisquam soluta doloribus aliquid velit dolores a
                        unde aut sed, officia beatae nulla sapiente iste omnis
                        ducimus minima neque excepturi atque quam?
                    </Card.Body>
                    <Card.Footer>
                        <Button>Register</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}

export default App;
