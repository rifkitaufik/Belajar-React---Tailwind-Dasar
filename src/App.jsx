import PlaceContentCenter from './components/PlaceContentCenter';
import Card from './components/Card.jsx';
import Button from './components/Button.jsx';
import { IconBrandGithub } from '@tabler/icons-react';
import Input from './components/Input.jsx';
import Label from './components/Label.jsx';

export default function App() {
    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Pendaftaran Lomba</Card.Title>
                <Card.Body>
                    <div className={'mb-6'}>
                        <Label htmlFor='name' value={'Name'} />
                        <Input id={'name'} name={'name'}></Input>
                    </div>
                    <div className={'mb-6'}>
                        <Label htmlFor='email' value={'Email'} />
                        <Input id={'email'} name={'email'}></Input>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Button className={'bg-black'}>
                        <IconBrandGithub />
                        Register
                    </Button>
                </Card.Footer>
            </Card>
        </PlaceContentCenter>
    );
}
