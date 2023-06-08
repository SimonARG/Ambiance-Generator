<!DOCTYPE html>

<html lang="en">

	<head>

		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Crea tu propio ruido de fondo personalizado para estudiar, trabajar o descanzar">

		<title>Generador de Ambiente</title>

		<link rel="stylesheet" href="css/index.css">
		<link rel="stylesheet" href="js/jquery-ui/jquery-ui.css">
		<link rel="icon" type="image/x-icon" href="images/favicon.ico">

		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">

		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">

		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous"/>

	</head>

	<body>

		<div class="body-container">

			<div class="arrow top"></div>
			<div class="arrow left"></div>
			<div class="arrow right"></div>
			<div class="arrow bot"></div>

			<div class="master-holder">
				<div class="master-container">
					<div class="master-flex">
						<h3>MASTER</h3>
						<button 
							type="button" 
							class="master-pnp" 
							onclick="masterPausePlay()">
							<i id="master-icon" class="fa-solid fa-play"></i>
						</button>
					</div>
				</div>
			</div>

			<div class="control-holder">
				<div class="control-container">
					<div class="control-grid">

						<?php for ($i=0; $i < 9; $i++) { ?>

							<div class="<?php echo "control" . $i ?>">

								<div class="switcher-holder <?php echo "switcher-h" . $i ?>">
									<div class="switcher-container">
										<span>Audio Switcher</span>
										<div class="audio-switcher">
											<ul>
												<?php foreach ($allSounds as $value) { ?>
													<li class="switcher-element <?php echo $value ?>" 
													onclick="switchAudio(
														'<?php echo $value ?>', 
														'<?php echo 'audio' . $i ?>',
														'<?php echo $value ?>',
														'<?php echo 'displaySpan' . $i ?>',
														'<?php echo 'displayIcon' . $i ?>',
														'<?php echo $icons[$value] ?>',
														'<?php echo 'btn-icon' . $i ?>'
														)">
														<?php echo $value ?>
														<i class="<?php echo $icons[$value] ?>"></i>
													</li>
												<?php } ?>
											</ul>
										</div>
									</div>
								</div>
								<audio 
									id="<?php echo "audio" . $i ?>" 
									class="<?php echo "player" . $i ?>" 
									src="<?php echo 'audio/' . $defaultSounds[$i] . '.opus' ?>" 
									loop>
								</audio>
								<div 
									onclick="toggleSwitcher(
										'<?php echo 'switcher-h' . $i ?>', 
										'<?php echo 'sw-arrow' . $i ?>'
										)" 
									class="switcher-arrow <?php echo "sw-arrow" . $i ?>">
								</div>
								<div class="audio-display">
									<span class="<?php echo "displaySpan" . $i ?>">
									<?php echo $defaultSounds[$i] ?></span>
									<i id="<?php echo "displayIcon" . $i ?>" 
									class="<?php echo $defaultIcons[$i] ?>"></i>
								</div>
								<div class="play-pause-container">
									<button 
										onclick="pausePlay(
											'<?php echo 'audio' . $i ?>', 
											'<?php echo 'btn-icon' . $i ?>'
											)" 
										type="button" 
										class="int-btn <?php echo "pause-play" . $i ?>">
										<i id="<?php echo "btn-icon" . $i ?>" 
										class="pnp-icon fa-solid fa-play btn-inactive"></i>
									</button> 
								</div>
								<div class="on-off-container">
									<button 
										onclick="onOff(
											'<?php echo 'audio' . $i ?>', 
											'<?php echo 'btn-icon' . $i ?>',
											'<?php echo 'displaySpan' . $i ?>',
											'<?php echo 'on-off' . $i ?>'
											)" 
										type="button" 
										class="on-off-btn btn-inactive <?php echo "on-off" . $i ?>">
										<i class="fa-solid fa-power-off"></i>
									</button>
								</div>
								<div class="volume-container">
									<input 
										oninput="changeVolume(
											'<?php echo 'audio' . $i ?>', 
											this.value
										)" 
										class="<?php echo "volume" . $i ?> slider" 
										id="<?php echo "volume" . $i ?>" 
										type="range"
										value="20">
								</div>

							</div>

						<?php } ?>

					</div>
				</div>
			</div>

			<div class="menu-holder">
				<div class="menu-container">
					<div class="menu-flex">
						<div class="logo-container">
							<h1 class="logo">Re;Noise</h1>
						</div>
						<div class="sublogo-container">
							<h2 class="sublogo">custom ambient sound generator</h2>
						</div>
						<div class="cliffnotes">
							<p>Press the top arrow to see the control panel</p>
							<p>Press the right arrow to embed music</p>
							<p>Press the bottom arrow to see the master controls</p>
						</div>
					</div>
				</div>
			</div>

			<div class="music-holder">
				<div class="music-container">
					<div class="music-flex">
						<h2>PLAYLIST EMBED</h2>
						<h3>Listen to your own music!</h3>
						<p>Enter a full Spotify or YouTube link to create the embedded player. It can be a song, album, playlist, or whatever else. The link should start with https://www. and include either youtube.com/... or open.spotify.com/...</p>
						<form action="" method="post">
							<label for="link">Music link:</label>
							<input id="link" type="url" name="url" placeholder="https://www..." autocomplete="off">
							<input onclick="embedMusic()" type="button" value="Embed">
						</form>
						<iframe id="youtube-player" frameborder="0" title="Music player"></iframe>
						<iframe id="spotify-player" style="border-radius:12px" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
					</div>
				</div>
			</div>

		</div>

		<script type="text/javascript" src="js/jquery-3.6.3.js"></script>
		<script type="text/javascript" src="js/jquery-ui/jquery-ui.js"></script>
		<script type="text/javascript" src="js/index.js"></script>

	</body>

</html>