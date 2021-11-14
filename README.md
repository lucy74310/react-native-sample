# react-native-sample
React native cli - sample app 


## install
(이전에 자바는 openjdk 11.0.2 로 설치되어 있었음) 
1. Android Studio 설치  
1.1 설치후 환경변수 ANDROID_HOME 추가하고 path에 넣어주기
     ㄴ Path 에 %ANDROID_HOME%\platform-tools 도 추가해주기 
1.2 SDK MANAGER 열기   
ㄴ SDK PLATFORMS 탭에서 SHOW DETAIL PACKAGES 체크하고 다운받으려는 SDK 버전 하위의   
 - Android SDK Platform 29
 - Intel x86 Atom System Image
 - Google APIs Intel x86 Atom System Image
 - Google APIs Intel x86 Atom_64 System Image  
 요런애들 체크하고 APPLY > 다운로드함. 
ㄴ SDK TOOLS 탭
  - Intel x86 Emulator Accelerator (HAXM installer) 설치
  - Android Emulator
  - Android SDK Platform-Tools   
1.3 Avd manager 열어서 이뮬레이터 생성 
  ㄴ 첨에 Android Studio 랑 sdk 를 용량 부족한 하드에 설치하니 프로세스가 죽는다고 뜸. 10GB정도는 넉넉히 있어야 한다고.. 그래서 다른 파트에 설치함. 


2. npm install -g react-native-cli

3. npm react-native init sampleApp 
