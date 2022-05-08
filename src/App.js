import './App.css';
import { Button, Card, Container, Link, TextField, useMediaQuery } from '@mui/material';
import CountrySelect from './CountrySelect';
import VideoBG from './VideoBG';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { amber } from '@mui/material/colors'

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: amber,
		text: {
			primary: "#eee"
		}
	}
});

function App() {
	const mobile = useMediaQuery('(max-width:600px)');

	return (
		<ThemeProvider theme={darkTheme}>
			{mobile
				? <VideoBG />
				: <img id='desktop-bg' alt='' src='assets/desktop_back.jpg' />
			}
			<Container className='main-container' maxWidth='xs'>
				<header>
					<div className='head-title-container'>
						<img alt='Logo' src='assets/logo.png' />
						<h1>TUSSLE.FIT</h1>
					</div>
					<p>Become your best self.</p>
				</header>

				<Card sx={{ padding: '1rem' }}>
					<div className='login-title'>Log in</div>
					<CountrySelect />
					<TextField margin='dense' fullWidth label='Phone number' type='number' />
					<Button className='login-button' fullWidth variant='contained'>Log In</Button>
					<Link className='support-link' href="#" underline='hover'>Contact Support</Link>
				</Card>

				{mobile
					? <footer>
						<div>Tussle is currently in a closed Beta.</div>
						<Link href='#'>
							<img src='assets/instagram.png' alt='Instagram' />
						</Link>
					</footer>
					: <>
						<div className='beta-info'>
							Tussle.fit is currently in a closed Beta.
						</div>
						<footer>
							<Link href="#" underline='hover'>Contact Support</Link>
							<Link href="#" underline='hover'>Terms of Service</Link>
							<Link href="#" underline='hover'>Privacy Policy</Link>
						</footer>
					</>
				}
			</Container>
		</ThemeProvider>
	);
}

export default App;