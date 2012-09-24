@echo off

rem Guess PRESTO_CLI_HOME if not defined
if not "%PRESTO_CLI_HOME%" == "" goto gotHome
set CURRENT_DIR=%cd%
set PRESTO_CLI_HOME=%CURRENT_DIR%
if exist "%PRESTO_CLI_HOME%\dist\prestocli.jar" goto okHome
cd ..
set PRESTO_CLI_HOME=%cd%
cd %CURRENT_DIR%
:gotHome

if exist "%PRESTO_CLI_HOME%\dist\prestocli.jar" goto okHome
echo The PRESTO_CLI_HOME environment variable is not defined correctly
echo This environment variable is needed to run this program
goto end
:okHome

java -classpath %PRESTO_CLI_HOME%\dist\prestocli.jar;%PRESTO_CLI_HOME%\dist\lib com.jackbe.jbp.ff.migration.MigrationMain %*

:end
