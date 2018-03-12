/*
	This program is free software; you can redistribute it and/or
	modify it under the terms of the GNU General Public License
	as published by the Free Software Foundation; either version 2
	of the License, or (at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program; if not, write to the Free Software Foundation,
	Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
*/

/*
	Name :
				YouTube RSS
	Author :
				▄▄▄▄▄▄▄  ▄ ▄▄ ▄▄▄▄▄▄▄
				█ ▄▄▄ █ ██ ▀▄ █ ▄▄▄ █
				█ ███ █ ▄▀ ▀▄ █ ███ █
				█▄▄▄▄▄█ █ ▄▀█ █▄▄▄▄▄█
				▄▄ ▄  ▄▄▀██▀▀ ▄▄▄ ▄▄
				 ▀█▄█▄▄▄█▀▀ ▄▄▀█ █▄▀█
				 █ █▀▄▄▄▀██▀▄ █▄▄█ ▀█
				▄▄▄▄▄▄▄ █▄█▀ ▄ ██ ▄█
				█ ▄▄▄ █  █▀█▀ ▄▀▀  ▄▀
				█ ███ █ ▀▄  ▄▀▀▄▄▀█▀█
				█▄▄▄▄▄█ ███▀▄▀ ▀██ ▄
*/

// YouTube user URL example : https://www.youtube.com/c/creatoracademy
//                            https://www.youtube.com/user/spacexchannel
var regUserID = /(?:https|http)\:\/\/(?:[\w]+\.)?youtube\.com\/(?:c\/|user\/){1}([a-zA-Z0-9\-\_]{1,})/g;
var sUserFeedURL = "https://www.youtube.com/feeds/videos.xml?user=";

// YouTube channel URL example : https://www.youtube.com/channel/UCtI0Hodo5o5dUb67FeUjDeA
var regChannelID = /(?:https|http)\:\/\/(?:[\w]+\.)?youtube\.com\/channel\/([a-zA-Z0-9\-\_]{1,})/g;
var sChannelFeedURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";

// YouTube playlist URL example : https://www.youtube.com/watch?v=Tk338VXcb24&list=PLC474234E124B5213
var regPlaylistID = /(?:https|http)\:\/\/(?:[\w]+\.)?youtube\.com(?:.*)list=([a-zA-Z0-9\-\_]+)&?/g;
var sPlaylistFeedURL = "https://www.youtube.com/feeds/videos.xml?playlist_id=";

var sCurrentURL = window.location.href;

if (regUserID.test(sCurrentURL)) {

	regUserID.lastIndex = 0;
	var sUserID = regUserID.exec(sCurrentURL)[1];
	console.log("YouTube user ID : " + sUserID + "\n" + "User RSS feed URL : " + sUserFeedURL + sUserID);
	if (window.prompt("Click \"OK\" to open " + document.querySelector("h1 #channel-title").textContent + "'s RSS feed URL :",sUserFeedURL + sUserID) != null) {
		window.open(sUserFeedURL + sUserID, "_blank");
	}

} else if (regChannelID.test(sCurrentURL)) {

	regChannelID.lastIndex = 0;
	var sChannelID = regChannelID.exec(sCurrentURL)[1];
	console.log("YouTube channel ID : " + sChannelID + "\n" + "Channel RSS feed URL : " + sChannelFeedURL + sChannelID);
	if (window.prompt("Click \"OK\" to open " + document.querySelector("h1 #channel-title").textContent + "'s RSS feed URL :",sChannelFeedURL + sChannelID) != null) {
		window.open(sChannelFeedURL + sChannelID, "_blank");
	}

} else if (regPlaylistID.test(sCurrentURL)) {

	regPlaylistID.lastIndex = 0;
	var sPlaylistID = regPlaylistID.exec(sCurrentURL)[1];
	console.log("YouTube playlist ID : " + sPlaylistID + "\n" + "Playlist RSS feed URL : " + sPlaylistFeedURL + sPlaylistID);
	if (window.prompt("Click \"OK\" to open playlist RSS feed URL :",sPlaylistFeedURL + sPlaylistID) != null) {
		window.open(sPlaylistFeedURL + sPlaylistID, "_blank");
	}

} else {

	alert("Oops ! Not a YouTube user, channel or playlist URL.");

}