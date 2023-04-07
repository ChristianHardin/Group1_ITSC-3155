# Angular
## Angular Setup
Now its time to setup Angular. Depending on if you have previously installed Angular or other components, you may or may not have trouble completing this setup. If such a situation occurs you can contact me (Christan Hardin) and I will help you complete the setup. Otherwise, the setup below should work.

- Install node (and npm)
- Run the Following Commands
```
npm install -g @angular/cli
npm install --save-dev @angular-devkit/build-angular
npm install --save ng2-charts
npm install --save chart.js
```
If on windows run the following command after install in powershell:
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

At this point in time you should open up the angular folder in a terminal of your choosing and run the following command ```ng serve```, if you see the webpage building than everything should work correctly, otherwise, troubleshoot.

Amendment: The command ```npx nx run Group1_ITSC-3155:serve``` may work if ```ng serve``` does not.

### For Installation of other services see [README.md](../README.md)