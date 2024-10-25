#[no_mangle]
pub fn activate(add_command: fn(id:String, callback: Option<fn()>)) {
    add_command("renameFile".to_string(), Some(hello));
}

fn hello() {
    println!("Hello, world!");
}
