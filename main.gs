function duplicate() {
    
    var sourceFolder = "Dung mr"; //Thư mục được chia sẻ - GDrive.VIP
    var targetFolder = "Dung Mori"; //Tên thư mục mới sẽ tạo và lưu trữ dữ liệu của bạn
    
    
    // var parentFolder=DriveApp.getFolderById('1Yuoqa_8RAvl9YdCsfaQj9mRnY6OYDqTH');
    //var source = DriveApp.getFoldersByName(sourceFolder);
    //var target = parentFolder.createFolder(targetFolder);
    var target;
    var name= DriveApp.getFolderById('1cuKw_AXC3onKUP-VIyw1B8Z-O8W220Qp'); //Lấy id thư mục hiện tại
    var source = name.getFolders(); //Thư mục cần copy
    var parentFolder = DriveApp.getFolderById('1VbFIU2xqXsfldD78n-DxIkPS88w3uzVB'); //Tìm thư mục đến
    target = checkCreateFolder(name,parentFolder)
    //  var target = target2.createFolder(name) //Tạo thư mục Gốc
    //var target = target2.getFolders();
    if (source.hasNext()) {
        //copyFolder(name, target); //Neu la thuc muc co nhieu thu muc con
    }
    //      var result = target2.getName();
    // Logger.log(result);
    copyFolder(name, target);
}
function checkCreateFolder(name,target){
    var folder;
    var fileExist = target.getFoldersByName(name);
    if (fileExist.hasNext()) {
        folder = fileExist.next();
    }
    else{
        folder = target.createFolder(name)
    }
    return folder;
}
function copyFolder(source, target) {
    var folders = source.getFolders();
    var files   = source.getFiles();
    
    while(files.hasNext()) {
        var file = files.next();
        // var result = source.getName();
        // Logger.log(result);
        //file.makeCopy(file.getName(), target);
        //sua tu day
        var fileExist = target.getFilesByName(file.getName());
        var chk = fileExist.hasNext();
        if (fileExist.hasNext()) {
            var result = file.getName();
            Logger.log(result);
            //file.makeCopy(file.getName(), target);
            //   console.log("exist");
            //  file.makeCopy(file.getName(), target);
        }
        else{
            //  console.log(file.getName());
            file.makeCopy(file.getName(), target);
        }
    }
    
    while(folders.hasNext()) {
        var subFolder = folders.next();
        var folderName = subFolder.getName();
        var targetFolder = checkCreateFolder(folderName,target);
        copyFolder(subFolder, targetFolder);
    }
    
}
