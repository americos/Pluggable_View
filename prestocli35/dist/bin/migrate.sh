#!/bin/sh

PRG="$0"
PRGDIR=`dirname "$PRG"`

# Only set PRESTO_CLI_HOME if not already set

[ -z "$PRESTO_CLI_HOME" ] && PRESTO_CLI_HOME=`cd "$PRGDIR/.." ; pwd`

if [ ! -r "$PRESTO_CLI_HOME"/dist/prestocli.jar ]; then
     echo The PRESTO_CLI_HOME environment variable is not defined correctly
     echo This environment variable is needed to run this program

    exit 1

fi

java -classpath $PRESTO_CLI_HOME/dist/prestocli.jar:$PRESTO_CLI_HOME/dist/lib com.jackbe.jbp.ff.migration.MigrationMain "$@"