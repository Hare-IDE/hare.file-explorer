use serde_json::Value;

#[no_mangle]
pub fn activate(context: Value) {
    println!("Hello, world!");
    println!("{}", context);
    // TODO: use context to load commands
}
