
@rem ==== syn script between HDD and Ramdisk ===
@echo off&setlocal
  
@rem get folder name
for %%I in ("%~dp0\.") do set ParentFolderName=%%~nxI
@rem echo %ParentFolderName%

@rem create new file 
del "_hdd_sync.bat"
echo robocopy "." "%cd%" /MIR /E /xo /mt:20 /XD  >> "_hdd_sync.bat"

robocopy "." "R:\_dev\%ParentFolderName%" /MIR /E /xo /mt:20 /XD 
 

@rem dps save => $ robocopy ".\dps-save" "." /E /IS /IT 