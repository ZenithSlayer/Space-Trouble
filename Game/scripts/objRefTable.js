const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Turret,
		C3.Behaviors.Sin,
		C3.Behaviors.MoveTo,
		C3.Plugins.Mouse,
		C3.Behaviors.Car,
		C3.Plugins.Text,
		C3.Plugins.Audio,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.ResetEventVar,
		C3.Behaviors.Turret.Acts.SetRotateSpeed,
		C3.Behaviors.Car.Acts.SetMaxSpeed,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.Audio.Acts.Play,
		C3.Behaviors.Turret.Cnds.IsEnabled,
		C3.Behaviors.Turret.Acts.AcquireTarget,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Behaviors.Turret.Cnds.OnShoot,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Behaviors.Car.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetTowardPosition,
		C3.Behaviors.Turret.Acts.SetRateOfFire,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.Audio.Acts.PlayByName,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Exps.Count,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Behaviors.MoveTo.Acts.MoveToPosition,
		C3.Behaviors.Sin.Acts.SetPhase,
		C3.Behaviors.MoveTo.Acts.SetMaxSpeed,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.System.Cnds.Repeat,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Behaviors.Car.Acts.SetDefaultControls,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Text.Acts.TypewriterText,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Acts.ToggleBoolVar,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Sprite.Acts.SetVisible
	];
};
self.C3_JsPropNameTable = [
	{Turret: 0},
	{MC_Ship: 0},
	{Sine: 0},
	{MoveTo: 0},
	{Enemy: 0},
	{Aim: 0},
	{Mouse: 0},
	{Car: 0},
	{Player_Missale: 0},
	{MenuText: 0},
	{Main_Ship: 0},
	{Explosion: 0},
	{Audio: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Hud: 0},
	{Defeat_ES: 0},
	{bt_TryAgain: 0},
	{bt_Shop: 0},
	{Shop_cooldown: 0},
	{Shop_turnspeed: 0},
	{Shop_speed: 0},
	{Shop_Credits: 0},
	{Shop_missileControl: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{NextLevel: 0},
	{futuristicutopia: 0},
	{Text: 0},
	{EnemiesAlive: 0},
	{CreditsThisRound: 0},
	{Points: 0},
	{MissileCooldown: 0},
	{CurRound: 0},
	{MaxRound: 0},
	{Infmode: 0},
	{PriceCooldown: 0},
	{PriceSpeed: 0},
	{PriceTurnSpeed: 0},
	{Credits: 0},
	{Cooldown: 0},
	{Speed: 0},
	{TurnSpeed: 0},
	{MissileControl: 0},
	{StartedIntro: 0}
];

self.InstanceType = {
	MC_Ship: class extends self.ISpriteInstance {},
	Enemy: class extends self.ISpriteInstance {},
	Aim: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Player_Missale: class extends self.ISpriteInstance {},
	MenuText: class extends self.ITextInstance {},
	Main_Ship: class extends self.ISpriteInstance {},
	Explosion: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Hud: class extends self.ISpriteInstance {},
	Defeat_ES: class extends self.ISpriteInstance {},
	bt_TryAgain: class extends self.ISpriteInstance {},
	bt_Shop: class extends self.ISpriteInstance {},
	Shop_cooldown: class extends self.ITextInstance {},
	Shop_turnspeed: class extends self.ITextInstance {},
	Shop_speed: class extends self.ITextInstance {},
	Shop_Credits: class extends self.ITextInstance {},
	Shop_missileControl: class extends self.ITextInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	NextLevel: class extends self.ISpriteInstance {},
	futuristicutopia: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {}
}