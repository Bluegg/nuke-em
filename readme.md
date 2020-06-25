# Nuke em

Delete all the node_modules in a directory (RECURSIVELY). Cos space is not infinite.

## ⚠️ CAUTION ⚠️
**USE AT YOUR OWN RISK! I HAVE BARELY TESTED IT AND IT *DEFINITELY* DOESN'T WORK ON WINDOWS**

![Gif of Aliens 'I say we take off, nuke the site from orbit. Its the only way to be sure'](https://media.giphy.com/media/VrgQym2lOjIZy/giphy.gif)

## Usage

```shell
cd my-projects
nuke-em -dryrun # Will list all node_modules folders and their sizes (WOW! they are huge!)

# or just

nuke-em # This will delete all of them. It will prompt for confirmation as it is destructive and you won't get them back (unles s you run `npm install` them again)
```

## Thanks
This is just a wrapper around the commands in [this post](https://trilon.io/blog/how-to-delete-all-nodemodules-recursively#Mac-Linux-)