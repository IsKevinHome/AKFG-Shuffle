// genAlbum goes through an object and creates elements to append to our HTML

function genAlbum(object) {
	// This instantiates through the table to append headings from our object.
	let headingNames = Object.keys(object.tracks[0]);
	let table = document.getElementById('tracks');
	table.innerHTML = '';
	let headings = document.createElement('tr');
	headingNames.forEach((arr) => {
		let tableHeader = document.createElement('th');
		tableHeader.textContent = arr;
		headings.appendChild(tableHeader);
	});
	table.appendChild(headings);
	// This instantiates our key values.
	let vals = Object.values(object.tracks);
	vals.forEach(function (album) {
		let row = document.createElement('tr');
		for (let properties in album) {
			let cell = document.createElement('td');
			cell.textContent = album[properties];
			row.appendChild(cell);
		}
		table.appendChild(row);
	});

	if (object === FEEDBACKFILE || object === FEEDBACKFILE2) {
		table.style.fontSize = '12px';
	} else {
		table.style.fontSize = '16px';
	}

	// Appends the album art
	let albumArt = document.getElementById('image');
	albumArt.src = object.img;

	//generates our description

	let about = document.getElementById('descrip');
	about.innerHTML = object.description;
	// running this will make it so the table is it's own thing

	let spotify = document.getElementById('player');
	spotify.src = object.spotify;

	// return table;
}

const KIMI_TSUNAGI_FIVE_M = {
	tracks: [
		{ 'No.': 1, Title: 'フラッシュバック', Length: '1:58' },
		{ 'No.': 2, Title: '未来の破片', Length: '4:45' },
		{ 'No.': 3, Title: '電波塔', Length: '3:31' },
		{ 'No.': 4, Title: 'アンダースタンド', Length: '3:44' },
		{ 'No.': 5, Title: '夏の日、残像', Length: '4:41' },
		{ 'No.': 6, Title: '無限グライダ', Length: '5:07' },
		{ 'No.': 7, Title: 'その訳を', Length: '4:36' },
		{ 'No.': 8, Title: 'N.G.S', Length: '2:54' },
		{ 'No.': 9, Title: '自閉探索', Length: '3:28' },
		{ 'No.': 10, Title: 'E', Length: '4:12' },
		{ 'No.': 11, Title: '君という花', Length: '6:10' },
		{ 'No.': 12, Title: 'ノーネーム', Length: '5:00' },
	],
	description: `Asian Kung-Fu Generation’s first studio album, and their second major-label
	release.  Released on November 19, 2003.  The album released two
	successful singles in Mirai No Kakera and Kimi To Iu Hana, and went
	on to sell over 250,000 copies.  `,
	img: '/img/Kimi_Tsunagi_Five_M.png',
	spotify: 'https://open.spotify.com/embed/album/3j2n8ZYCGF2vBG0FlNLySB',
};
const SOL_FA = {
	tracks: [
		{ 'No.': 1, Title: '振動', Length: '2:27' },
		{ 'No.': 2, Title: 'リライト', Length: '3:47' },
		{ 'No.': 3, Title: '君の街まで', Length: '3:36' },
		{ 'No.': 4, Title: 'マイ・ワールド', Length: '4:03' },
		{ 'No.': 5, Title: '夜の向こう', Length: '3:12' },
		{ 'No.': 6, Title: 'ラストシーン', Length: '4:01' },
		{ 'No.': 7, Title: 'サイレン', Length: '5:28' },
		{ 'No.': 8, Title: 'Re:Re:', Length: '3:48' },
		{ 'No.': 9, Title: '24時 ', Length: '3:31' },
		{ 'No.': 10, Title: '真夜中と真昼の夢', Length: '4:21' },
		{ 'No.': 11, Title: '海岸通り', Length: '4:40' },
		{ 'No.': 12, Title: 'ループ&ループ', Length: '3:45' },
	],
	description: 'Album description goes here...',
	img: '/img/sol-Fa.png',
	spotify: 'https://open.spotify.com/embed/album/56xQzwz8VKC3LOtvrI4g04',
};
const FANCLUB = {
	tracks: [
		{ 'No.': 1, Title: '暗号のワルツ', Length: '4:25' },
		{ 'No.': 2, Title: 'ワールドアパート', Length: '4:29' },
		{ 'No.': 3, Title: 'ブラックアウト', Length: '5:19' },
		{ 'No.': 4, Title: '桜草', Length: '3:53' },
		{ 'No.': 5, Title: '路地裏のうさぎ', Length: '2:47' },
		{ 'No.': 6, Title: 'ブルートレイン', Length: '4:19' },
		{ 'No.': 7, Title: '真冬のダンス', Length: '3:25' },
		{ 'No.': 8, Title: 'バタフライ', Length: '4:44' },
		{ 'No.': 9, Title: 'センスレス', Length: '5:36' },
		{ 'No.': 10, Title: '月光', Length: '6:22' },
		{ 'No.': 11, Title: 'タイトロープ', Length: '5:28' },
	],
	description: 'Album description goes here...',
	img: '/img/Fan Club.png',
	spotify: 'https://open.spotify.com/embed/album/5oA5jyMLX7pLpYGUwhmjL5',
};
const WORLD_WORLD_WORLD = {
	tracks: [
		{ 'No.': 1, Title: 'ワールド ワールド ワールド', Length: '1:18' },
		{ 'No.': 2, Title: 'アフターダーク', Length: '3:12' },
		{ 'No.': 3, Title: '旅立つ君へ', Length: '2:49' },
		{ 'No.': 4, Title: 'ネオテニー', Length: '4:43' },
		{ 'No.': 5, Title: 'トラベログ', Length: '4:07' },
		{ 'No.': 6, Title: 'No.9', Length: '3:33' },
		{ 'No.': 7, Title: 'ナイトダイビング', Length: '3:02' },
		{ 'No.': 8, Title: 'ライカ', Length: '3:52' },
		{ 'No.': 9, Title: '惑星', Length: '4:01' },
		{ 'No.': 10, Title: '転がる岩、君に朝が降る', Length: '4:38' },
		{ 'No.': 11, Title: 'ワールド ワールド', Length: '1:21' },
		{ 'No.': 12, Title: '或る街の群青', Length: '4:16' },
		{ 'No.': 13, Title: '新しい世界', Length: '3:18' },
	],
	description: 'Album description goes here...',
	img: '/img/World World World.png',
	spotify: 'https://open.spotify.com/embed/album/6ZcU0MGlWn9oc4dEhY1TEI',
};
const SURF_BUNGAKU_KAMAKURA = {
	tracks: [
		{ 'No.': 1, Title: '藤沢ルーザー', Length: '2:45' },
		{ 'No.': 2, Title: '鵠沼サーフ', Length: '2:28' },
		{ 'No.': 3, Title: '江ノ島エスカー', Length: '2:39' },
		{ 'No.': 4, Title: '腰越クライベイビー', Length: '3:54' },
		{ 'No.': 5, Title: '七里ヶ浜スカイウォーク', Length: '2:50' },
		{ 'No.': 6, Title: '稲村ヶ崎ジェーン', Length: '3:09' },
		{ 'No.': 7, Title: '極楽寺ハートブレイク', Length: '2:21' },
		{ 'No.': 8, Title: '長谷サンズ', Length: '2:56' },
		{ 'No.': 9, Title: '由比ヶ浜カイト', Length: '3:54' },
		{ 'No.': 10, Title: '鎌倉グッドバイ', Length: '4:31' },
	],
	description: 'Album description goes here...',
	img: '/img/Surf Bungaku Kamakura.png',
	spotify: 'https://open.spotify.com/embed/album/3ovX8G9Sop8sZCuAcj0lS9',
};
const MAGIC_DISK = {
	tracks: [
		{ 'No.': 1, Title: '新世紀のラブソング', Length: '5:14' },
		{ 'No.': 2, Title: 'マジックディスク', Length: '4:37' },
		{ 'No.': 3, Title: '双子葉', Length: '3:59' },
		{ 'No.': 4, Title: 'さよならロストジェネレイション', Length: '5:19' },
		{ 'No.': 5, Title: '迷子犬と雨のビート', Length: '4:57' },
		{ 'No.': 6, Title: '青空と黒い猫', Length: '4:39' },
		{ 'No.': 7, Title: '架空生物のブルース', Length: '4:19' },
		{ 'No.': 8, Title: 'ラストダンスは悲しみを乗せて', Length: '3:42' },
		{ 'No.': 9, Title: 'マイクロフォン', Length: '3:21' },
		{ 'No.': 10, Title: 'ライジングサン', Length: '4:18' },
		{ 'No.': 11, Title: 'イエス', Length: '3:17' },
		{ 'No.': 12, Title: '橙', Length: '4:14' },
		{ 'No.': 13, Title: 'ソラニン', Length: '4:33' },
	],
	description: 'Album description goes here...',
	img: '/img/Magic Disk.png',
	spotify: 'https://open.spotify.com/embed/album/1Pz6ADZaTvqTSUBC2ux7oI',
};
const LANDMARK = {
	tracks: [
		{ 'No.': 1, Title: 'All Right Part 2', Length: '3:34' },
		{ 'No.': 2, Title: 'N2', Length: '3:06' },
		{ 'No.': 3, Title: '1.2.3.4.5.6. Baby', Length: '3:24' },
		{ 'No.': 4, Title: 'AとZ', Length: '4:38' },
		{ 'No.': 5, Title: '大洋航路', Length: '3:15' },
		{ 'No.': 6, Title: 'バイシクルレース', Length: '4:16' },
		{ 'No.': 7, Title: 'それでは、また明日', Length: '3:42' },
		{ 'No.': 8, Title: '1980', Length: '3:36' },
		{ 'No.': 9, Title: 'マシンガンと形容詞', Length: '3:54' },
		{ 'No.': 10, Title: 'レールロード', Length: '3:08' },
		{ 'No.': 11, Title: '踵で愛を打ち鳴らせ', Length: '4:23' },
		{ 'No.': 12, Title: 'アネモネの咲く春に', Length: '5:01' },
	],
	description: 'Album description goes here...',
	img: '/img/Landmark.png',
	spotify: 'https://open.spotify.com/embed/album/6n9dzumIiKUunv4pYJiEK7',
};
const HOMETOWN = {
	tracks: [
		{ 'No.': 1, Title: 'クロックワーク', Length: '4:02' },
		{ 'No.': 2, Title: 'ホームタウン', Length: '2:57' },
		{ 'No.': 3, Title: 'レインボーフラッグ', Length: '3:40' },
		{ 'No.': 4, Title: 'サーカス', Length: '4:37' },
		{ 'No.': 5, Title: '荒野を歩け', Length: '4:16' },
		{ 'No.': 6, Title: 'UCLA', Length: '5:18' },
		{ 'No.': 7, Title: 'モータープール', Length: '3:23' },
		{ 'No.': 8, Title: 'ダンシングガール', Length: '3:09' },
		{ 'No.': 9, Title: 'さようならソルジャー', Length: '4:23' },
		{ 'No.': 10, Title: 'ボーイズ&ガールズ', Length: '4:40' },
	],
	description: 'Album description goes here...',
	img: '/img/Hometown.png',
	spotify: 'https://open.spotify.com/embed/album/3wmz5LudXtskEIT87Jn8S4',
};
const FEEDBACKFILE = {
	tracks: [
		{ 'No.': 1, Title: 'エントランス', Length: '3:58' },
		{ 'No.': 2, Title: 'ロケットNo.4', Length: '3:42' },
		{ 'No.': 3, Title: '絵画教室', Length: '3:23' },
		{ 'No.': 4, Title: 'サイレン#2', Length: '6:13' },
		{ 'No.': 5, Title: '夕暮れの紅', Length: '4:16' },
		{ 'No.': 6, Title: 'Hold me tight', Length: '4:04' },
		{ 'No.': 7, Title: 'ロードムービー', Length: '4:25' },
		{ 'No.': 8, Title: '飛べない魚', Length: '2:58' },
		{ 'No.': 9, Title: '堂々巡りの夜', Length: '2:27' },
		{ 'No.': 10, Title: '嘘とワンダーランド', Length: '2:28' },
		{ 'No.': 11, Title: '永遠に', Length: '3:12' },
		{ 'No.': 12, Title: '自閉探索', Length: '3:22' },
		{ 'No.': 13, Title: 'フラッシュバック (2004 @Shibuya-AX)', Length: '2:24' },
		{
			'No.': 14,
			Title: 'アンダースタンド (2004 @ Hitachi Seaside Park)',
			Length: '3:45',
		},
		{ 'No.': 15, Title: 'N.G.S (2005 @Shibuya-AX)', Length: '2:53' },
		{ 'No.': 16, Title: 'Re:Re: (2006 @Yokohama Arena)', Length: '5:03' },
	],
	description: 'Album description goes here...',
	img: '/img/Feedback File.png',
	spotify: 'https://open.spotify.com/embed/album/4ys4lrEwbsYH5gBjU1WEsC',
};
const HOKAIAMPLIFIER = {
	tracks: [
		{ 'No.': 1, Title: '遥か彼方', Length: '4:02' },
		{ 'No.': 2, Title: '羅針盤', Length: '2:32' },
		{ 'No.': 3, Title: '粉雪', Length: '3:46' },
		{ 'No.': 4, Title: '青の歌', Length: '3:52' },
		{ 'No.': 5, Title: 'サンデイ', Length: '4:03' },
		{ 'No.': 6, Title: '12', Length: '4:36' },
	],
	description: 'Album description goes here...',
	img: './img/Hokai Amplifier.png',
	spotify: 'https://open.spotify.com/embed/album/1BZa5KjEDzfU2ut7QwiUHo',
};
const MADAMINUASHITANI = {
	tracks: [
		{ 'No.': 1, Title: '脈打つ生命', Length: '3:29' },
		{ 'No.': 2, Title: 'サイエンスフィクション', Length: '2:52' },
		{ 'No.': 3, Title: 'ムスタング', Length: '5:00' },
		{ 'No.': 4, Title: '深呼吸', Length: '3:54' },
		{ 'No.': 5, Title: '融雪', Length: '3:27' },
		{ 'No.': 6, Title: '未だ見ぬ明日に', Length: '4:01' },
	],
	description: 'Album description goes here...',
	img: './img/Mada Minu Ashita Ni.png',
	spotify: 'https://open.spotify.com/embed/album/2xqPSkjzTFEjOXrIUmj7fF',
};
const FEEDBACKFILE2 = {
	tracks: [
		{ 'No.': 1, Title: 'ローリングストーン', Length: '4:25' },
		{ 'No.': 2, Title: 'スローダウン', Length: '5:27' },
		{ 'No.': 3, Title: '十二進法の夕景', Length: '4:41' },
		{ 'No.': 4, Title: '夏蝉', Length: '3:31' },
		{ 'No.': 5, Title: '夜のコール', Length: '3:57' },
		{ 'No.': 6, Title: '白に染めろ', Length: '3:47' },
		{ 'No.': 1, Title: 'ムスタング', Length: '5:08' },
		{ 'No.': 2, Title: '雨上がりの希望', Length: '3:52' },
		{ 'No.': 3, Title: 'ひかり', Length: '6:02' },
		{ 'No.': 4, Title: 'オールドスクール', Length: '3:05' },
		{ 'No.': 5, Title: 'リロードリロード', Length: '1:52' },
		{ 'No.': 6, Title: '夜を越えて', Length: '4:41' },
		{ 'No.': 1, Title: '冷蔵庫のろくでもないジョーク', Length: '2:26' },
		{ 'No.': 2, Title: 'ケモノノケモノ', Length: '4:05' },
		{ 'No.': 3, Title: '今を生きて', Length: '4:50' },
		{
			'No.': 4,
			Title: '迷子犬と雨のビート (2010 @Wakasu Park)',
			Length: '4:58',
		},
		{
			'No.': 5,
			Title: 'アネモネの咲く春に (2012 @ Tokyo International Forum',
			Length: '6:21',
		},
	],
	description: 'Album description goes here...',
	img: './img/Feedback File 2.png',
	spotify: 'https://open.spotify.com/embed/album/7w3E74TxKJDKzUXOcN9cxU',
};

// Below puts the objects into an array, shuffles, and picks one.
let AKFG = [
	HOKAIAMPLIFIER,
	MADAMINUASHITANI,
	KIMI_TSUNAGI_FIVE_M,
	SOL_FA,
	FANCLUB,
	WORLD_WORLD_WORLD,
	SURF_BUNGAKU_KAMAKURA,
	MAGIC_DISK,
	LANDMARK,
	HOMETOWN,
	FEEDBACKFILE,
	FEEDBACKFILE2,
];

function createAlbum() {
	function shuffle(array) {
		var m = array.length,
			t,
			i;
		while (m) {
			i = Math.floor(Math.random() * m--);
			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}
		return array[0];
	}

	let suggestion = shuffle(AKFG);
	return document.body.appendChild(genAlbum(suggestion));
}

// if for some reason they wont be inside the same div
// when this is generated, check the div structure, then
// check to see if you're returning twice.
