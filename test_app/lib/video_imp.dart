import 'package:flutter/material.dart';
import 'package:videos_player/model/control.model.dart';
import 'package:videos_player/model/video.model.dart';
import 'package:videos_player/util/theme.util.dart';
import 'package:videos_player/videos_player.dart';

class VideoImp extends StatefulWidget {
  const VideoImp({Key? key}) : super(key: key);

  @override
  _VideoImpState createState() => _VideoImpState();
}

class _VideoImpState extends State<VideoImp> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // appBar: AppBar(
      //   // Here we take the value from the MyHomePage object that was created by
      //   // the App.build method, and use it to set our appbar title.
      //   title: Text("Video player"),
      // ),
      body: VideosPlayer(
        networkVideos: [
          new NetworkVideo(
              id: "2",
              name: "MERN stack Tutorial #1",
              videoUrl:
                  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              thumbnailUrl:
                  "https://miro.medium.com/max/1838/1*jDIj2SKAE-Bp32owLoHDjw.png",
              videoControl: new NetworkVideoControl(
                fullScreenByDefault: true,
              )),
          new NetworkVideo(
              id: "3",
              name: "MERN stack Tutorial #2",
              videoUrl:
                  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              thumbnailUrl:
                  "https://miro.medium.com/max/1838/1*jDIj2SKAE-Bp32owLoHDjw.png",
              videoControl: new NetworkVideoControl(autoPlay: true)),
          new NetworkVideo(
              id: "4",
              name: "MERN stack Tutorial #3",
              videoUrl:
                  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
              thumbnailUrl:
                  "https://miro.medium.com/max/1838/1*jDIj2SKAE-Bp32owLoHDjw.png"),
          new NetworkVideo(
              id: "5",
              name: "MERN stack Tutorial #4",
              videoUrl:
                  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              thumbnailUrl:
                  "https://miro.medium.com/max/1838/1*jDIj2SKAE-Bp32owLoHDjw.png"),
          new NetworkVideo(
              id: "6",
              name: "MERN stack Tutorial #5",
              videoUrl:
                  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              thumbnailUrl:
                  "https://miro.medium.com/max/1838/1*jDIj2SKAE-Bp32owLoHDjw.png"),
          new NetworkVideo(
              id: "7",
              name: "MERN stack Tutorial #6",
              videoUrl:
                  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              thumbnailUrl:
                  "https://miro.medium.com/max/1838/1*jDIj2SKAE-Bp32owLoHDjw.png"),
        ],
        playlistStyle: Style.Style2,
      ),
    );
  }
}
