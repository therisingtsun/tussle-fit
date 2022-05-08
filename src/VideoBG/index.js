import './index.css';

export default function VideoBG() {
	return (
		<div id="fullwidth-video">
			<div className="fullwidth-video-bg">
				<video playsInline autoPlay muted loop>
					<source src="assets/mobile_back.mp4" type='video/mp4' />
				</video>
			</div>
		</div>
	);
}