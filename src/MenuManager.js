class MenuManager
{
  constructor()
  {
    this.scenes = new Map();
    this.current = undefined;
  }

  addScene(name, scene)
  {
    if(this.scenes.has(name))
    {
      throw("There is already a scene name " + name);
    }

    this.scenes.set(name, scene);

    if (this.current == undefined)
    {
      console.log("current set");
      this.current = this.scenes.get(name);
    }
  }

  update()
  {
    if(this.current !== undefined)
    {
      this.current.update();
    }
  }

  draw(ctx)
  {
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);

    if(this.current !== undefined)
    {
      this.current.render(ctx);
    }
    else
    {
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
    }
  }

  removeScene(name)
  {
    if(this.scenes.has(name))
    {
      this.scenes.delete(name);

      if(this.scenes.keys.length === 0)
      {
        this.current = undefined;
      }
    }
  }

  setCurrentScene(name)
  {
    if(this.scenes.has(name))
    {
      this.current = this.scenes.get(name);
    }
    else {
      {
        throw("No scene in dictionary that goes by the name of" + name);
      }
    }
  }


}
